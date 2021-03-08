const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Payment = require('./payment')
const Sequelize = require('sequelize')
const db = require('../db')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
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
  }
})

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
