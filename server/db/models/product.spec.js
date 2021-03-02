/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  describe('Product Model Creation', function(done) {
    var modelData = {
      name: 'apple',
      description: 'red bright shiny crispy fruit',
      picture: 'photo',
      price: 0.39,
      quantity: 4
    }

    it(`should create a new Model`, function() {
      Product.create(modelData).then(function(product) {
        expect(product.name).to.equal('apple')
        expect(product.price).to.equal(0.39)
        Product.destroy({
          where: {
            id: product.id
          }
        })
        done()
      })
    })
  })
}) // end describe('User model')
