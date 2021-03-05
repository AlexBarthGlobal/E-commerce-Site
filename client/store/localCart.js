const cartState = {
  cart: []
}

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
      localStorage.setItem('cart', JSON.stringify(item))
      console.log('item', item)
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
      return action.cart
    default:
      return state
  }
}
