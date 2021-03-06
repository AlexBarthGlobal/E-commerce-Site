/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from './single-product'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('SingleProduct', () => {
  let singleProduct
  let matchParams = {
    params: {
      productId: 1
    }
  }
  const sampleProduct = [
    {
      name: 'W201',
      description:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      picture: 'http://dummyimage.com/173x216.bmp/5fa2dd/ffffff',
      price: 463,
      stock: 48
    }
  ]
  beforeEach(() => {
    singleProduct = shallow(
      <SingleProduct
        currentProduct={sampleProduct}
        match={matchParams}
        fetchProductDetails={params => null}
        fetchCart={() => null}
      />
    )
  })

  it('renders the name in an h2', () => {
    expect(singleProduct.find('#single-product')).to.have.lengthOf(1)
  })
})
