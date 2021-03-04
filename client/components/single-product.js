import React from 'react'
import {connect} from 'react-redux'
import {fetchProductDetails, _addToCart, fetchCart} from '../store'

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
    this.props.fetchCart(this.props.userId)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    if (cart) {
      this.setState({
        cart: cart
      })
    }
  }

  addToLoggedOutCart(product) {
    if (this.state.cart.includes(product)) {
      product.quantity += 1
    } else {
      product.quantity = 1
      this.setState(prevState => ({
        cart: [...prevState.cart, product]
      }))
    }
    const {cart} = this.state
    if (cart) localStorage.setItem('cart', JSON.stringify(cart))
    console.log('cart', cart)
  }

  render() {
    // console.log(this.props.userId)
    const product = this.props.currentProduct
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
                    this.props.userId,
                    this.props.cart.id
                  )
                : this.addToLoggedOutCart(product)
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
    cart: state.order
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProductDetails: id => dispatch(fetchProductDetails(id)),
    fetchCart: userId => dispatch(fetchCart(userId)),
    addToCart: (product, userId, cartId) =>
      dispatch(_addToCart(product, userId, cartId))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
