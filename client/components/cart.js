import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {_removeItem, _updateCart} from '../store/order'
import {me, fetchCart} from '../store'
import {
  _getCart,
  _removeLocalItem,
  _updateLocalQuantity
} from '../store/localCart'

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
    this.updateLocalSelectedQuantity = this.updateLocalSelectedQuantity.bind(
      this
    )
  }
  async componentDidMount() {
    await this.props.loadUserData()
    if (this.props.user.id) {
      this.props.fetchCart(this.props.user.id)
    }
    document.addEventListener('keydown', this.escFunction, false)
    for (let key in formList) {
      this.setState({[key]: formList[key]})
    }
  }

  updateToSelectedQuantity(orderId, productId) {
    if (event.target.value == 0) {
      // Dispatch DELETE Thunk
      this.props.deleteProduct(orderId, productId)
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

  updateLocalSelectedQuantity(productId) {
    if (event.target.value == 0) {
      // Dispatch DELETE Thunk
      this.props.removeLocalItem(productId)
    }
    if (event.target.value == 10) {
      flag.value = 1
      flag.productId = productId
      this.forceUpdate()
    } else {
      // Dispatch UPDATE Thunk
      this.setState({[productId]: event.target.value})
      const newQuantity = parseInt(event.target.value)
      this.props.updateLocalQuantity(productId, newQuantity)
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
      } else {
        // Dispatch UPDATE Thunk
        this.props.updateQuantity(
          parseInt(this.state[productInfo.productId]),
          productInfo.orderId,
          productInfo.productId
        )
      }
    }
    flag.value = 0
    flag.productId = null
    this.setState({value: 0, changed: 0})
    evt.preventDefault()
  }

  updateLocalSelectedQuantityForm(evt, productInfo) {
    if (this.state.changed === 1) {
      if (this.state[productInfo] == 0) {
        // Dispatch DELETE Thunk
        this.props.removeLocalItem(productInfo)
      } else {
        // Dispatch UPDATE Thunk
        this.props.updateLocalQuantity(
          productInfo,
          parseInt(this.state[productInfo])
        )
      }
    }
    flag.value = 0
    flag.productId = null
    this.setState({value: 0, changed: 0})
    evt.preventDefault()
  }

  deleteProductFunc(orderId, productId) {
    // Dispatch DELETE Thunk
    this.props.deleteProduct(orderId, productId)
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
    const calculateTotal = () => {
      let total = 0
      this.props.user.id
        ? this.props.order.map(product => {
            total += product.productPrice / 100 * product.quantity
          })
        : this.props.localCart.map(product => {
            total += product.price / 100 * product.quantity
          })
      return total
    }
    return !this.props.user.id ? (
      <div id="list">
        <h2>Your Cart</h2>
        {this.props.localCart.map((product, index) => {
          if (product.quantity < 10 && flag.productId !== product.id) {
            formList[product.id] = product.quantity
            return (
              <div key={index}>
                <div>
                  <img src={product.picture} />
                </div>
                <div>{product.name}</div>
                <div>Price: ${product.price / 100 * product.quantity}</div>
                <div>
                  In cart:
                  <select
                    onChange={() => {
                      this.updateLocalSelectedQuantity(product.id)
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
                  onClick={() => this.props.removeLocalItem(product.id)}
                >
                  Delete
                </button>
              </div>
            )
          } else {
            formList[product.id] = product.quantity
            return (
              <div key={index}>
                <div>
                  <img src={product.picture} />
                </div>
                <div>{product.name}</div>
                <div>Price: ${product.price / 100 * product.quantity}</div>
                <div>
                  In cart:
                  <form
                    onSubmit={e => {
                      this.updateLocalSelectedQuantityForm(e, product.id)
                    }}
                  >
                    <input
                      name="quantity"
                      className="smallerInput"
                      value={this.state[product.id]}
                      onChange={e => this.handleChange(e, product.id)}
                    />
                    <button>Update</button>
                  </form>
                </div>
                <button
                  type="button"
                  onClick={() => this.props.removeLocalItem(product.id)}
                >
                  Delete
                </button>
              </div>
            )
          }
        })}
        <h2>Total: ${calculateTotal()}</h2>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    ) : (
      <div>
        <h2>Your Cart</h2>
        {this.props.order.map((product, index) => {
          if (product.quantity < 10 && flag.productId !== product.productId) {
            formList[product.productId] = product.quantity
            return (
              <div key={index}>
                <div>
                  <img src={product.picture} width="350" height="175" />
                  <p>{product.name}</p>
                  <p>Price: ${product.productPrice / 100 * product.quantity}</p>
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
                <div>
                  Price: ${product.productPrice / 100 * product.quantity}
                </div>
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
                      value={this.state[product.productId]}
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
        <h2>Total: ${calculateTotal()}</h2>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    )
  }
}
const mapState = state => {
  flag = {value: 0, productId: null}
  return {
    order: state.order.cartProducts,
    user: state.user,
    localCart: state.localCart
  }
}
const mapDispatch = dispatch => {
  return {
    deleteProduct: (orderId, productId) =>
      dispatch(_removeItem(orderId, productId)),
    updateQuantity: (quantity, orderId, productId) =>
      dispatch(_updateCart(quantity, orderId, productId)),
    loadUserData: () => dispatch(me()),
    fetchCart: userId => dispatch(fetchCart(userId)),
    getLocalCart: () => dispatch(_getCart()),
    removeLocalItem: itemId => dispatch(_removeLocalItem(itemId)),
    updateLocalQuantity: (itemId, newQuantity) =>
      dispatch(_updateLocalQuantity(itemId, newQuantity))
  }
}
export default connect(mapState, mapDispatch)(Cart)
