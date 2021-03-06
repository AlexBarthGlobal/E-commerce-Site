const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  type: Sequelize.STRING,
  line1: Sequelize.STRING,
  line2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.STRING
})

module.exports = Address
