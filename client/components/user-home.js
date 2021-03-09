import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, userId, localCart} = props

  useEffect(() => {
    /*

    localCart.forEach(product => {
      addToCart(product, userId, cart.id)
    })

    */
  })

  return (
    <div id="page-header">
      <h3>Welcome, {email}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    userId: state.user.id,
    localCart: state.localCart.cart
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

/*

import the local cart from state (mapState)
import addToCart from ../store
loop through local cart while adding each product from the localcart to the order/productsInCart
useEffect() might come in handy (componentDidMount for functional components)

Some Ideas to go over


*/
