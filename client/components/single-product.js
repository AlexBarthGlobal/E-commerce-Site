import React from 'react'
import {connect} from 'react-redux'
import {fetchProductDetails, _addToCart, fetchCart} from '../store'
import {_setCart, _getCart} from '../store/localCart'

export class SingleProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      cart: []
    }
    this.addToLoggedOutCart = this.addToLoggedOutCart.bind(this)
  }

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
    console.log('cart', cart)
    return (
      <React.Fragment>
        <img src={product.picture} />
        <div id="single-product" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button
            onClick={() =>
              this.props.userId
                ? this.props.addToCart(
                    product,
                    this.props.cart.id
                  )
                : this.props.addToLocalCart(product)
            }
            type="submit"
          >
            Add To Cart
          </button>
          <p>{product.description}</p>
        </div>
      </React.Fragment>
    )
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
    addToCart: (product, cartId) =>
      dispatch(_addToCart(product, cartId)),
    addToLocalCart: item => dispatch(_setCart(item)),
    getLocalCart: () => dispatch(_getCart())
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
