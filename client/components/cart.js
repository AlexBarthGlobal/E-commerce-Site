import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
//Create Thunk named updateQuantityThunk or something

export class Cart extends React.Component {
  constructor(props) {
    super(props)

    this.updateToSelectedQuantity = this.updateToSelectedQuantity.bind(this)
  }

  componentDidMount() {
    console.log('FROM THE CART')
    console.log(this.props)
  }

  updateToSelectedQuantity(orderId, productId) {
    // Dispatch Thunk

    // this.props.updateQuantity({orderId, productId, quantitySelected: event.target.value});

    console.log('Order ID')
    console.log(orderId)
    console.log('ProductId')
    console.log(productId)
    console.log('Quantity Selected')
    console.log(event.target.value)
  }

  render() {
    const calculateTotal = () => {
      let total = 0
      this.props.order.map(product => {
        total += product.productPrice * product.quantity
      })
      return total
    }

    return (
      <div>
        <h2>Your Cart</h2>
        {this.props.order.map((product, index) => {
          return (
            <div key={index}>
              <div>
                <img src={product.picture} />
              </div>
              <div>{product.name}</div>
              <div>Price: ${product.productPrice * product.quantity}</div>
              <div>
                In cart:<select
                  onChange={() => {
                    this.updateToSelectedQuantity(
                      product.orderId,
                      product.productId
                    )
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
            </div>
          )
        })}
        <h2>Total: ${calculateTotal()}</h2>
        <button>Checkout</button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    order: state.order.cartProducts,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    //updateQuantity: (orderId, productId, quantitySelected) => dispatch(updateQuantityThunk(orderId, productId, quantitySelected))
  }
}

export default connect(mapState, mapDispatch)(Cart)
