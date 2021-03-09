import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {_removeItem, _updateCart} from '../store/order'

let flag = {value: 0, productId: null}
let formList = {}

export class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {changed: 0}

    this.updateToSelectedQuantity = this.updateToSelectedQuantity.bind(this)
    this.updateToSelectedQuantityFromForm = this.updateToSelectedQuantityFromForm.bind(
      this
    )
    this.escFunction = this.escFunction.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteProductFunc = this.deleteProductFunc.bind(this)
    this.checkIfZero = this.checkIfZero.bind(this)
    this.stateSetter = this.stateSetter.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false)
    console.log('mounted')
    console.log(formList)
    for (let key in formList) {
      this.setState({[key]: formList[key]})
    }
  }

  updateToSelectedQuantity(orderId, productId) {
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
      this.setState({[productId]: event.target.value})
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

  handleChange(event, productId) {
    this.setState({[productId]: event.target.value, changed: 1})
  }

  updateToSelectedQuantityFromForm(evt, productInfo) {
    if (this.state.changed === 1) {
      if (this.state[productInfo.productId] == 0) {
        // Dispatch DELETE Thunk
        this.props.deleteProduct(productInfo.orderId, productInfo.productId)
        console.log('Item deleted')
      } else {
        // Dispatch UPDATE Thunk
        console.log(evt)
        this.props.updateQuantity(
          parseInt(this.state[productInfo.productId]),
          productInfo.orderId,
          productInfo.productId
        )
        console.log('successful order, ')
      }
    } else {
      console.log('nothing changed')
    }

    console.log(productInfo)

    flag.value = 0
    flag.productId = null
    this.setState({value: 0, changed: 0})
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

  stateSetter(info) {
    this.setState(info)
  }

  checkIfZero(quantity) {
    if (quantity == 0) {
      this.forceUpdate()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
  }

  render() {
    console.log('THIS IS THE STATE')
    console.log(this.state)
    const calculateTotal = () => {
      let total = 0
      this.props.order.map(product => {
        total += product.productPrice * product.quantity
      })
      return total
    }

    return (
      <div id="list">
        <h2>Your Cart</h2>
        {this.props.order.map((product, index) => {
          if (product.quantity < 10 && flag.productId !== product.productId) {
            formList[product.productId] = product.quantity
            return (
              <div key={index}>
                <div>
                  <img src={product.picture} width="350" height="175" />
                  <p>{product.name}</p>
                  <p>Price: ${product.productPrice * product.quantity}</p>
                  <div>
                    In cart:
                    <select
                      onChange={() => {
                        this.updateToSelectedQuantity(
                          product.orderId,
                          product.productId
                        )
                      }}
                      value={product.quantity}
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
              </div>
            )
          } else {
            formList[product.productId] = product.quantity
            return (
              <div key={index}>
                <div>
                  <img src={product.picture} width="350" height="175" />
                </div>
                <div>{product.name}</div>
                <div>Price: ${product.productPrice * product.quantity}</div>
                <div>
                  In cart:
                  <form
                    onSubmit={e => {
                      this.updateToSelectedQuantityFromForm(e, {
                        orderId: product.orderId,
                        productId: product.productId
                      })
                    }}
                  >
                    <input
                      name="quantity"
                      className="smallerInput"
                      value={this.state[product.productId]} //The quantity of the product
                      onChange={e => this.handleChange(e, product.productId)}
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
        <div className="total">
          <h2>Total: ${calculateTotal()}</h2>
          <button>Checkout</button>
        </div>
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
    deleteProduct: (orderId, productId) =>
      dispatch(_removeItem(orderId, productId)),
    updateQuantity: (quantity, orderId, productId) =>
      dispatch(_updateCart(quantity, orderId, productId))
  }
}

export default connect(mapState, mapDispatch)(Cart)
