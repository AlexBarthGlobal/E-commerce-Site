const router = require('express').Router()
const {Order, ProductsInCart, Product} = require('../db/models')
module.exports = router

//update quantity
router.put('/users/:userId/cart/:cartId/update', async (req, res, next) => {
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
router.delete('/users/:userId/cart/:cartId/delete', async (req, res, next) => {
  const {productId} = req.body
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
router.post('/users/:userId/cart/:cartId/add', async (req, res, next) => {
  console.log(req.body)
  const {productId, price} = req.body
  const orderId = req.params.cartId
  try {
    const addedProduct = await ProductsInCart.findOne({
      where: {
        orderId: orderId,
        productId: productId
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
        productId: productId,
        productPrice: price,
        quantity: 1
      })
    }

    res.json(updatedProduct)
  } catch (err) {
    console.log(err)
  }
})

router.get('/users/:userId/cart', async (req, res, next) => {
  try {
    const incompleteOrder = await Order.findOrCreate({
      where: {
        status: 'incomplete',
        userId: req.params.userId
      },
      include: {
        model: Product,
        through: {
          attributes: ProductsInCart
        }
      }
    })
    res.json(incompleteOrder[0])
  } catch (err) {
    next(err)
  }
})

module.exports = router
