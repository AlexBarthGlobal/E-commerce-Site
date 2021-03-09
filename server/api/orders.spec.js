/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Order = db.model('order')
const User = db.model('user')

describe('Order routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/orders/users/:userId/', () => {
    const codysEmail = 'cody@puppybook.com'
    const codysAddress = '432 Ocean Ave.'

    beforeEach(() => {
      return User.create({
        id: 10,
        email: codysEmail,
        address: codysAddress
      })
    })

    it('GET /api/users/:userId cart', async () => {
      const res = await request(app)
        .get('/api/users/10')
        .expect(200)

      expect(res.body).to.be.an('object')
    })

    // it('PUT /api/users/1', async () => {
    //   const res = await request(app)
    //     .put('/api/users/1', {
    //       email: 'codysSecondEmail@codysAddress.com',
    //       password: 'codysPassword',
    //     })
    //     .expect(201)

    //   expect(res.body).to.be.an('array')
    //   expect(res.body[0].email).to.be.equal('codysSecondEmail@codysAddress.com')
    // })
  }) // end describe('/api/users')
}) // end describe('User routes')
