let cartState = JSON.parse(localStorage.getItem('cart') || '[]')

//still need to add delete item from cart type,creator, and thunk. Might be easier once I have access to the cart page itself in order to make sure the button is operational.

//action type

const SET_CART = 'SET_CART'
const GET_LOCAL_CART = 'GET_LOCAL_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const CLEAR_CART = 'CLEAR_CART'

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

const removeItem = itemId => {
  return {
    type: REMOVE_ITEM,
    itemId
  }
}

const clearCart = cart => {
  return {
    type: CLEAR_CART,
    cart
  }
}

//thunk

export function _setCart(item) {
  return dispatch => {
    try {
      if (!item.quantity) item.quantity = 1

      let itemExists = false
      cartState.map(cartItem => {
        if (cartItem.id === item.id) {
          cartItem.quantity += 1
          itemExists = true
        }
      })
      if (!itemExists) {
        cartState.push(item)
      }

      let localCart = JSON.stringify(cartState)
      localStorage.setItem('cart', localCart)
      dispatch(setCart(cartState))
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

export const _removeItem = itemId => dispatch => {
  try {
    cartState.filter(item => {
      return item.id !== itemId
    })
    let localCart = JSON.stringify(cartState)
    localStorage.setItem('cart', localCart)
    dispatch(removeItem(cartState))
  } catch (err) {
    console.log(err)
  }
}

export const _clearCart = () => dispatch => {
  try {
    localStorage.clear()
    const cart = []
    dispatch(clearCart(cart))
  } catch (err) {
    console.log(err)
  }
}

//reducer

export default function(state = cartState, action) {
  switch (action.type) {
    case SET_CART:
      return action.item
    case GET_LOCAL_CART:
      return action.cart
    case REMOVE_ITEM:
      return action.itemId
    case CLEAR_CART:
      return action.cart
    default:
      return state
  }
}
