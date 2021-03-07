const cartState = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]')
}

//still need to add delete item from cart type,creator, and thunk. Might be easier once I have access to the cart page itself in order to make sure the button is operational.

//action type

const SET_CART = 'SET_CART'
const GET_CART = 'GET_CART'

//action creator

const setCart = item => {
  return {
    type: SET_CART,
    item
  }
}

const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

//thunk
export function _setCart(item) {
  return dispatch => {
    try {
      item.quantity = 1
      cartState.cart.push(item)
      let localCart = JSON.stringify(cartState.cart)
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

//reducer

export default function(state = cartState, action) {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    case GET_CART:
      return {
        cart: action.cart
      }
    default:
      return state
  }
}
