const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Payment = require('./payment')
const db = require('../db')
const Sequelize = require('sequelize')

const ProductsInCart = db.define('ProductsInCart', {
  productPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.INTEGER
  }
})

ProductsInCart.addHook('afterValidate', (item, options) => {
  console.log('running validate')
  const newTotalPrice = item.quantity * item.productPrice
  console.log(
    '🚀 ~ file: index.js ~ line 33 ~ ProductsInCart.addHook ~ quantity',
    item.quantity
  )
  item.totalPrice = newTotalPrice
  console.log(
    '🚀 ~ file: index.js ~ line 34 ~ ProductsInCart.addHook ~ newTotalPrice',
    newTotalPrice
  )
})

ProductsInCart.addHook('afterSave', async (item, options) => {
  const allCartItems = await ProductsInCart.findAll({
    where: {orderId: item.orderId}
  })

  console.log('first item', allCartItems[0].totalPrice)
  const totalOrderVal = allCartItems.reduce((acc, singleItem) => {
    return acc + singleItem.totalPrice
  }, 0)
  console.log(
    '🚀 ~ file: index.js ~ line 36 ~ ProductsInCart.addHook ~ totalOrderVal',
    totalOrderVal
  )
  await Order.update(
    {totalValue: totalOrderVal},
    {
      where: {
        id: item.orderId
      }
    }
  )
})

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Order.belongsTo(User)
User.hasMany(Order)

Order.belongsTo(Payment)
Payment.hasMany(Order)

Order.belongsToMany(Product, {through: ProductsInCart})
Product.belongsToMany(Order, {through: ProductsInCart})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Order,
  ProductsInCart,
  Payment
}
