const Sequelize = require('sequelize')
const db = require('../db')

const Payment = db.define('payment', {
  type: {
    type: Sequelize.ENUM('credit')
  },
  ccnumber: {
    type: Sequelize.INTEGER
  },
  cvv: {
    type: Sequelize.INTEGER
  },
  nameOnCard: {
    type: Sequelize.STRING
  },
  zipcode: {
    type: Sequelize.INTEGER
  }
})

module.exports = Payment
