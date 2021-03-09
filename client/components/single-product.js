import React from 'react'
import {connect} from 'react-redux'
import {fetchProductDetails, _addToCart, fetchCart} from '../store'
import {_setCart, _getCart} from '../store/localCart'

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchProductDetails(this.props.match.params.productId)
    this.props.userId
      ? this.props.fetchCart(this.props.userId)
      : this.props.getLocalCart()
  }

  render() {
    // console.log(this.props.userId)
    const product = this.props.currentProduct
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')

    if (this.props.cart) {
      return (
        <React.Fragment>
          <div id="list" key={product.id}>
            <img src={product.picture} width="400" height="200" />
            <div id="description">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button
                onClick={() =>
                  this.props.userId
                    ? this.props.addToCart(product, this.props.cart.id)
                    : this.props.addToLocalCart(product)
                }
                type="submit"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return <h1>LOADING......</h1>
    }
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    currentProduct: state.product.currentProduct,
    userId: state.user.id,
    cart: state.order.orderInfo
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProductDetails: id => dispatch(fetchProductDetails(id)),
    fetchCart: userId => dispatch(fetchCart(userId)),
    addToCart: (product, cartId) => dispatch(_addToCart(product, cartId)),
    addToLocalCart: item => dispatch(_setCart(item)),
    getLocalCart: () => dispatch(_getCart())
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
