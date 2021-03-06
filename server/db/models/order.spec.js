/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  describe('Product Model Creation', function(done) {
    var completedOrder = {
      status: 'submitted',
      submittedTime: 1615046444,
      totalValue: 420,
      name: 'Sada Baby',
      phoneNumber: '123-456-7890',
      email: 'testemail@test.com',
      addressLine1: '123 Street Name',
      addressLine2: 'Unit 1',
      city: 'Detroit',
      state: 'MI',
      zipcode: '12345'
    }
    var incompleteOrder = {
      submittedTime: null,
      name: null,
      phoneNumber: null,
      email: null,
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      zipcode: null
    }
    var failedOrder = {
      status: 'submitted',
      submittedTime: 1615046444,
      totalValue: 420,
      name: 'TeejayX6',
      phoneNumber: null,
      email: null,
      addressLine1: 'Scammers Way',
      addressLine2: 'Unit 1',
      city: 'Detroit',
      state: 'MI',
      zipcode: '12345'
    }
    it(`should create a new Model for completed orders`, function() {
      Order.create(completedOrder).then(function(order) {
        expect(order.name).to.equal('Sada Baby')
        expect(order.totalValue).to.equal(420)
        Order.destroy({
          where: {
            id: order.id
          }
        })
        done()
      })
    })
    it(`should create a new Model for incomplete orders`, function() {
      Order.create(incompleteOrder).then(function(order) {
        expect(order.name).to.equal(null)
        expect(order.totalValue).to.equal(0)
        Order.destroy({
          where: {
            id: order.id
          }
        })
        done()
      })
    })
    it(`should fail to create a submitted order if information is missing`, function() {
      Order.create(failedOrder).then(function(order) {
        expect(order).to.equal('All fields must be filled out to submit order')
        Order.destroy({
          where: {
            id: order.id
          }
        })
        done()
      })
    })
  })
}) // end describe('Order model')
