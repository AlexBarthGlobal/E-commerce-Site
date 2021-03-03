/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchProducts, fetchProductDetails} from './product'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {user: {}, product: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetch all products', () => {
    it('eventually dispatches the GET PRODUCTS action', async () => {
      const fakeProducts = [
        {
          name: 'W201',
          description:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
          picture: 'http://dummyimage.com/173x216.bmp/5fa2dd/ffffff',
          price: 4.63,
          quantity: 48
        },
        {
          name: '9-3',
          description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          picture: 'http://dummyimage.com/118x202.jpg/cc0000/ffffff',
          price: 58.85,
          quantity: 58
        }
      ]
      mockAxios.onGet('/api/products/').replyOnce(200, fakeProducts)
      await store.dispatch(fetchProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_PRODUCTS')
      expect(actions[0].products).to.be.deep.equal(fakeProducts)
    })
  })

  describe('fetch single product details', () => {
    it('get product details: eventually dispatches the GET_PRODUCT_DETAILS action', async () => {
      const fakeProducts = [
        {
          name: 'W201',
          description:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
          picture: 'http://dummyimage.com/173x216.bmp/5fa2dd/ffffff',
          price: 4.63,
          quantity: 48
        },
        {
          name: '9-3',
          description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          picture: 'http://dummyimage.com/118x202.jpg/cc0000/ffffff',
          price: 58.85,
          quantity: 58
        }
      ]
      mockAxios.onGet('/api/products/1').replyOnce(200, fakeProducts[0])
      await store.dispatch(fetchProductDetails(1))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_PRODUCT_DETAILS')
      expect(actions[0].product).to.be.deep.equal(fakeProducts[0])
    })
  })
})
