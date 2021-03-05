const router = require('express').Router()
const {User} = require('../db/models')
const alert = require('alert')
module.exports = router

async function isAdmin(req, res, next) {
  const user = await User.findByPk(req.session.passport.user)
  try {
    if (user.userType === 'ADMIN') {
      next()
    } else {
      alert('Access Denied!')
    }
  } catch (err) {
    console.log(err)
  }
}

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const updateUserInfo = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.userId
      }
    })
    if (updateUserInfo.length !== 2) {
      res.sendStatus(404)
    }
    const [numUpdated, [updatedUser]] = updateUserInfo
    res.status(201).json(updatedUser)
  } catch (err) {
    next(err)
  }
})

router.delete('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    await user.destroy()
    res.status(204).json(user)
  } catch (err) {
    next(err)
  }
})
