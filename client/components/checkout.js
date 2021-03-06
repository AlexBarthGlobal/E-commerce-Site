import React from 'react'
import {connect} from 'react-redux'
import {_checkoutCart, fetchCart} from '../store'

export class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      payment: {
        ccNumber: '',
        cvv: '',
        zipcode: '',
        nameOnCard: ''
      },
      orderInfo: this.props.orderInfo
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {}

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    this.props.checkoutCart(
      this.state.user,
      this.state.payment,
      this.state.orderInfo
    )
  }

  render() {
    const {name, address, phoneNumber, email} = this.state.user

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" value={email} onChange={this.handleChange} />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={this.handleChange}
            />
          </label>
          <div className="address">
            <h3>Address</h3>
            <label>
              Address Line 1:
              <input
                type="text"
                value={address.line1}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Address Line 2:
              <input
                type="text"
                value={address.line2}
                onChange={this.handleChange}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                value={address.city}
                onChange={this.handleChange}
              />
            </label>
            <label>
              State:
              <input
                type="text"
                value={address.line1}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="billingInfo">
            <label>
              Name on Card:
              <input
                type="text"
                value={this.state.nameOnCard}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Credit Card Number:
              <input
                type="text"
                value={this.state.ccNumber}
                onChange={this.handleChange}
              />
            </label>
            <label>
              CVV:
              <input
                type="number"
                value={this.state.cvv}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Zip Code:
              <input
                type="number"
                value={this.state.zipcode}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    orderInfo: state.order.orderInfo,
    orderItems: state.order.cartProducts
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: userId => dispatch(fetchCart(userId)),
    checkoutCart: (user, payment, orderInfo) =>
      dispatch(_checkoutCart(user, payment, orderInfo))
  }
}

export default connect(mapState, mapDispatch)(Checkout)
