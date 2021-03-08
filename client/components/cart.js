import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {_removeItem, _updateCart} from '../store/order'

let flag = {value: 0, productId: null}

export class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 0, changed: 0}

    this.updateToSelectedQuantity = this.updateToSelectedQuantity.bind(this)
    this.updateToSelectedQuantityFromForm = this.updateToSelectedQuantityFromForm.bind(
      this
    )
    this.escFunction = this.escFunction.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteProductFunc = this.deleteProductFunc.bind(this)
  }

  componentDidMount() {
    console.log('FROM THE CART')
    console.log(this.props)
    console.log('THIS IS THE FLAG')
    console.log(flag)
    document.addEventListener('keydown', this.escFunction, false)
  }

  updateToSelectedQuantity(orderId, productId) {
    console.log('Order ID')
    console.log(orderId)
    console.log('ProductId')
    console.log(productId)
    console.log('Quantity Selected')
    console.log(event.target.value)

    if (event.target.value == 0) {
      // Dispatch DELETE Thunk
      this.props.deleteProduct(orderId, productId)
      console.log('item deleted')
    }

    if (event.target.value == 10) {
      flag.value = 1
      flag.productId = productId
      this.forceUpdate()
    } else {
      // Dispatch UPDATE Thunk
      const newQuantity = parseInt(event.target.value)
      this.props.updateQuantity(newQuantity, orderId, productId)
    }
  }

  escFunction(event) {
    if (event.keyCode === 27 && flag.value === 1) {
      flag.value = 0
      flag.productId = null
      this.forceUpdate()
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value, changed: 1})
  }

  updateToSelectedQuantityFromForm(evt, productInfo) {
    if (this.state.changed === 1) {
      if (this.state.value == 0) {
        // Dispatch DELETE Thunk
        this.props.deleteProduct(productInfo.orderId, productInfo.productId)
        console.log('Item deleted')
      } else {
        // Dispatch UPDATE Thunk
        this.props.updateQuantity(
          parseInt(this.state.value),
          productInfo.orderId,
          productInfo.productId
        )
        console.log('successful order, ')
        console.log(parseInt(this.state.value))
      }
    } else {
      console.log('nothing changed')
    }

    console.log(productInfo)

    flag.value = 0
    flag.productId = null
    this.setState({value: 0, changed: 0})

    // console.log('Order ID')
    // console.log(orderId)
    // console.log('ProductId')
    // console.log(productId)
    // console.log('Quantity Selected')
    // console.log(event.target.value)
    console.log(this.state)
    evt.preventDefault()
  }

  deleteProductFunc(orderId, productId) {
    // Dispatch DELETE Thunk
    this.props.deleteProduct(orderId, productId)
    console.log(orderId, productId)
    flag.value = 0
    flag.productId = null
    this.forceUpdate()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
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
          if (product.quantity < 10 && flag.productId !== product.productId) {
            return (
              <div key={index}>
                <div>
                  <img src={product.picture} />
                </div>
                <div>{product.name}</div>
                <div>Price: ${product.productPrice * product.quantity}</div>
                <div>
                  In cart:
                  <select
                    onChange={() => {
                      this.updateToSelectedQuantity(
                        product.orderId,
                        product.productId
                      )
                    }}
                    defaultValue={product.quantity}
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10+</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    this.deleteProductFunc(product.orderId, product.productId)
                  }
                >
                  Delete
                </button>
              </div>
            )
          } else {
            return (
              <div key={index}>
                <div>
                  <img src={product.picture} />
                </div>
                <div>{product.name}</div>
                <div>Price: ${product.productPrice * product.quantity}</div>
                <div>
                  In cart:
                  <form
                    onChange={this.handleChange}
                    onSubmit={e =>
                      this.updateToSelectedQuantityFromForm(e, {
                        orderId: product.orderId,
                        productId: product.productId
                      })
                    }
                  >
                    <input
                      name="quantity"
                      className="smallerInput"
                      defaultValue={product.quantity}
                    />
                    <button>Update</button>
                  </form>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    this.deleteProductFunc(product.orderId, product.productId)
                  }
                >
                  Delete
                </button>
              </div>
            )
          }
        })}
        <h2>Total: ${calculateTotal()}</h2>
        <button>Checkout</button>
      </div>
    )
  }
}

const mapState = state => {
  flag = {value: 0, productId: null}
  return {
    order: state.order.cartProducts,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    //Supposed thunks that have not been created yet.
    deleteProduct: (orderId, productId) =>
      dispatch(_removeItem(orderId, productId)),
    updateQuantity: (quantity, orderId, productId) =>
      dispatch(_updateCart(quantity, orderId, productId))
  }
}

export default connect(mapState, mapDispatch)(Cart)
