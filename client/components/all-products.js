import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchProducts, fetchCart, me} from '../store'
import {_getCart} from '../store/localCart'
/**
 * COMPONENT
 */

export class AllProducts extends React.Component {
  async componentDidMount() {
    this.props.fetchProducts()
    this.props.getLocalCart()
  }

  render() {
    return (
      <React.Fragment>
        <h2>All Products</h2>
        <div id="list-wrap">
          {this.props.allProducts.map(product => {
            return (
              <div className="product-preview" key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                  className="product-preview"
                >
                  <img src={product.picture} width="350" height="175" />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
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
    getLocalCart: () => dispatch(_getCart()),
    fetchCart: userId => dispatch(fetchCart(userId)),
    loadUserData: () => dispatch(me())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
