/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctName', () => {
      let fruit

      beforeEach(async () => {
        fruit = await Product.create({
          name: 'Apple',
          description: 'a red shiny tasty crispy apple',
          picture:
            'https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png',
          price: 0.39,
          quantity: 6
        })
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
