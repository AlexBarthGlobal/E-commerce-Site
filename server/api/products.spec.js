/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const newProduct = {}

    beforeEach(() => {
      return Product.create(newProduct)
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)
      expect(res.body).to.be.an('array')
      expect(res.body[0]).to.be.equal(newProduct)
      expect(res.body[0].quantity).to.be.equal(newProduct.quantity)
    })
  })

  describe('/api/products/:id', () => {
    const newProduct = {}

    beforeEach(() => {
      return Product.create(newProduct)
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.be.equal(newProduct)
      expect(res.body.quantity).to.be.equal(newProduct.quantity)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
