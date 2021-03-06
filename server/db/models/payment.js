const Sequelize = require('sequelize')
const db = require('../db')

const Payment = db.define('payment', {
  type: {
    type: Sequelize.ENUM('credit')
  },
  ccNumber: {
    type: Sequelize.STRING
  },
  cvv: {
    type: Sequelize.INTEGER
  },
  nameOnCard: {
    type: Sequelize.STRING
  },
  zipcode: {
    type: Sequelize.STRING
  }
})

module.exports = Payment
