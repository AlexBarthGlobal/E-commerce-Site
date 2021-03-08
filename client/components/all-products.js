import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts} from '../store'
import {_getCart} from '../store/localCart'

/**
 * COMPONENT
 */

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
    this.props.getLocalCart()
  }

  render() {
    return (
      <React.Fragment>
        <h2>All Products</h2>
        <div id="all-product-list">
          {this.props.allProducts.map(product => {
            return (
              <div className="product-preview" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.picture} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log(state)
  return {
    allProducts: state.product.allProducts
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    getLocalCart: () => dispatch(_getCart())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
