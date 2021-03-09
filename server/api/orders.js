const router = require('express').Router()
const {Order, ProductsInCart, Payment, User} = require('../db/models')
module.exports = router

//auth middleware
const isUser = async (req, res, next) => {
  const order = await Order.findByPk(req.params.cartId)
  if (order.userId === req.session.passport.user) {
    next()
  } else {
    res.sendStatus(404)
  }
}

//update quantity

router.put('/:cartId/update', isUser, async (req, res, next) => {
  const {productId, quantity} = req.body
  const orderId = req.params.cartId
  try {
    const updatedProduct = await ProductsInCart.findOne({
      where: {
        orderId: orderId,
        productId: productId
      }
    })

    res.send(await updatedProduct.update({quantity: quantity}))
  } catch (err) {
    console.log(err)
  }
})

//delete item from cart
router.delete('/:cartId/delete', async (req, res, next) => {
  const productId = req.body.data
  const orderId = req.params.cartId
  try {
    const deletedItem = await ProductsInCart.destroy({
      where: {
        orderId: orderId,
        productId: productId
      }
    })
    res.status(204).json(deletedItem)
  } catch (err) {
    console.log(err)
  }
})

//add to cart
router.post('/:cartId/add', async (req, res, next) => {
  const {id, price, name, picture} = req.body

  const orderId = req.params.cartId
  try {
    const addedProduct = await ProductsInCart.findOne({
      where: {
        orderId: orderId,
        productId: id
      }
    })
    let updatedProduct

    if (addedProduct) {
      updatedProduct = await addedProduct.update({
        quantity: (addedProduct.quantity += 1),
        productPrice: price
      })
    } else {
      updatedProduct = await ProductsInCart.create({
        orderId: orderId,
        productId: id,
        productPrice: price,
        quantity: 1,
        name: name,
        picture: picture
      })
    }

    res.json(updatedProduct)
  } catch (err) {
    console.log(err)
  }
})

//checkout a cart
router.put('/:cartId/checkout', async (req, res, next) => {
  try {
    const {address, user, payment} = req.body
    const paymentMethod = await Payment.create(payment)
    const currentOrder = await Order.findByPk(req.params.cartId)
    res.send(
      await currentOrder.update({
        status: 'submitted',
        ...user,
        ...address,
        paymentId: paymentMethod.id
      })
    )
  } catch (err) {
    next(err)
  }
})

//search for an incomplete cart and create one if it doesn't exist
router.get('/users/:userId/', async (req, res, next) => {
  try {
    const incompleteOrder = await Order.findOrCreate({
      where: {
        status: 'incomplete',
        userId: req.params.userId
      }
    })
    if (!incompleteOrder[1]) {
      const cartProducts = await ProductsInCart.findAll({
        where: {
          orderId: incompleteOrder[0].id
        }
      })
      res.json({orderInfo: incompleteOrder[0], cartProducts: cartProducts})
    } else {
      res.json({orderInfo: incompleteOrder[0], cartProducts: []})
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
