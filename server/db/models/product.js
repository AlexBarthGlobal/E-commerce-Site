const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  picture: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnayemdevs.com%2Fchanging-the-default-thumbnail-placeholder-of-woocommerce-product-is-easy%2F&psig=AOvVaw0_bvcWx7A91Om3mycRMppG&ust=1614793475503000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjb3c2Uku8CFQAAAAAdAAAAABAD'
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 5
  }
})

module.exports = Product
