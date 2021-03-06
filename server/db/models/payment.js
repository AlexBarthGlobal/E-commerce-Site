const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Payment = db.define('payment', {
  type: {
    type: Sequelize.ENUM('credit')
  },
  ccNumber: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('ccNumber')
    }
  },
  cvv: {
    type: Sequelize.INTEGER
  },
  nameOnCard: {
    type: Sequelize.STRING
  },
  zipcode: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt')
    }
  }
})

module.exports = Payment

Payment.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Payment.encryptCcNumber = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndCcNumber = payment => {
  if (payment.changed('ccNumber')) {
    payment.salt = Payment.generateSalt()
    payment.ccNumber = Payment.encryptPassword(
      payment.password(),
      payment.salt()
    )
  }
}
Payment.beforeCreate(setSaltAndCcNumber)
Payment.beforeUpdate(setSaltAndCcNumber)
