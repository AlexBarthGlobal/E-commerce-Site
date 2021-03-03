const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  products: {
    type: Sequelize.ARRAY,
    allowNull: true
  },
  status: {
    type: Sequelize.ENUM('incomplete', 'submitted'),
    allowNull: false,
    defaultValue: 'incomplete'
  },
  totalValue: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  submittedTime: {
    type: Sequelize.DATE,
    allowNull: true
  }
})

module.exports = Order
