const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define(
  'order',
  {
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
    },
    name: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    addressLine1: Sequelize.STRING,
    addressLine2: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zipcode: Sequelize.STRING
  },
  {
    Sequelize,
    validate: {
      checkCompleteOrderForSubmission() {
        if (this.status === 'submitted') {
          for (const property in this) {
            if (this[property] === null) {
              throw new Error('All fields must be filled out to submit order')
            }
          }
        }
      }
    }
  }
)

module.exports = Order
