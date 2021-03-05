const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

/* const checkAdmin = async (req, res, next) => {
  try {
  } catch (err) {
    next(err)
  }
} */

router.get('/', async (req, res, next) => {
  try {
    console.log('req session', req.session)
    const products = await Product.findAll({
      attributes: ['name', 'description', 'picture', 'id']
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

//TODO: Post route for adding new product
/* router.post('/', async (req, res, next) => {
  try {
    const {name, imageUrl, address, description} = req.body
    const newProduct = await Product.create({
      name,
      imageUrl,
      address,
      description,
    })
    res.status(201).send(newProduct)
  } catch (err) {
    next(err)
  }
})
 */

module.exports = router
