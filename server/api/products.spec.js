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
    const newProductOne = {
      name: 'W201',
      description:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      picture: 'http://dummyimage.com/173x216.bmp/5fa2dd/ffffff',
      price: 4.63,
      quantity: 48
    }

    const newProductTwo = {
      name: 'Grand Prix',
      description:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      picture: 'http://dummyimage.com/201x148.bmp/cc0000/ffffff',
      price: 47.21,
      quantity: 62
    }

    beforeEach(async () => {
      await Product.create(newProductOne)
      await Product.create(newProductTwo)
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)
      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.equal(2)
      expect(res.body[0]).to.be.equal(newProductOne)
      expect(res.body[0].quantity).to.be.equal(newProductOne.quantity)
    })
  })

  describe('/api/products/:id', () => {
    const newProductOne = {
      name: 'W201',
      description:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      picture: 'http://dummyimage.com/173x216.bmp/5fa2dd/ffffff',
      price: 4.63,
      quantity: 48
    }

    beforeEach(() => {
      return Product.create(newProductOne)
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products/1')
        .expect(200)
      expect(res.body).to.be.an('object')
      expect(res.body).to.be.equal(newProductOne)
      expect(res.body.quantity).to.be.equal(newProductOne.quantity)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
