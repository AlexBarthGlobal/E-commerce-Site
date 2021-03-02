/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllProducts} from './all-products'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AllProducts', () => {
  let allProducts
  const sampleProducts = [
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
  beforeEach(() => {
    allProducts = shallow(<AllProducts allProducts={sampleProducts} />)
  })

  it('renders the email in an h3', () => {
    expect(allProducts.find('h3').text()).to.be.equal('W201')
  })
})
