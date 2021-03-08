import axios from 'axios'

const cartState = JSON.parse(localStorage.getItem('cart') || '[]')

//still need to add delete item from cart type,creator, and thunk. Might be easier once I have access to the cart page itself in order to make sure the button is operational.

//action type

const SET_CART = 'SET_CART'
const GET_LOCAL_CART = 'GET_LOCAL_CART'
const CHECKOUT_LOCAL_CART = 'CHECKOUT_LOCAL_CART'

//action creator

const setCart = item => {
  return {
    type: SET_CART,
    item
  }
}

const getCart = cart => {
  return {
    type: GET_LOCAL_CART,
    cart
  }
}

const checkoutLocalCart = completedOrder => {
  return {
    type: CHECKOUT_LOCAL_CART,
    completedOrder
  }
}

//thunk
export function _setCart(item) {
  return dispatch => {
    try {
      item.quantity = 1
      cartState.push(item)
      let localCart = JSON.stringify(cartState)
      localStorage.setItem('cart', localCart)
      dispatch(setCart(item))
    } catch (err) {
      console.log(err)
    }
  }
}

export const _getCart = () => dispatch => {
  try {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    dispatch(getCart(cart))
  } catch (err) {
    console.log(err)
  }
}

export const _checkoutLocalCart = (
  user,
  address,
  payment
) => async dispatch => {
  try {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log('🚀 ~ file: localCart.js ~ line 65 ~ cart', cart)
    const res = await axios.post(`/api/orders/checkout`, {
      user,
      address,
      payment,
      cart
    })
    dispatch(checkoutLocalCart(res.data))
  } catch (err) {
    console.log(err)
  }
}

//reducer

export default function(state = cartState, action) {
  switch (action.type) {
    case SET_CART:
      return [
        ...state,
        action.item
        // cart: [...state.cart, action.item]
      ]
    case GET_LOCAL_CART:
      return action.cart
    case CHECKOUT_LOCAL_CART:
      return action.completedOrder
    default:
      return state
  }
}
