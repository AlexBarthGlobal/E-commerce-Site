import React from 'react'
import {connect} from 'react-redux'
import {fetchProductDetails, _addToCart, fetchCart} from '../store'

export class SingleProduct extends React.Component {
  componentDidMount() {
    console.log('mounting, here are the props', this.props)
    this.props.fetchProductDetails(this.props.match.params.productId)
    this.props.fetchCart(this.props.userId)
  }

  render() {
    const product = this.props.currentProduct
    return (
      <React.Fragment>
        <img src={product.picture} />
        <div id="single-product" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button
            onClick={() =>
              this.props.addToCart(
                product,
                this.props.userId,
                this.props.cart.id
              )
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
  console.log(state)
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
    addToCart: (product, cartId) => dispatch(_addToCart(product, cartId))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
