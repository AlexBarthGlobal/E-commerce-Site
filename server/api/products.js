const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'email']
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {name, imageUrl, address, description} = req.body
    const newCampus = await Campus.create({
      name,
      imageUrl,
      address,
      description
    })
    res.status(201).send(newCampus)
  } catch (err) {
    next(err)
  }
})

module.exports = router
