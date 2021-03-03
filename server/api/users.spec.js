/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'
    const codysAddress = '432 Ocean Ave.'

    beforeEach(() => {
      return User.create({
        // id: 1,
        email: codysEmail,
        address: codysAddress
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
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
