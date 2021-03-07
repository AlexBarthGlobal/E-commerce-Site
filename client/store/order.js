import axios from 'axios'
import history from '../history'

const cartState = {
  orderInfo: {},
  cartProducts: []
}

//action types

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_CART = 'UPDATE_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'

//action creators

const getCart = (orderInfo, cartProducts) => {
  return {
    type: GET_CART,
    orderInfo,
    cartProducts
  }
}

const addToCart = product => {
  return {
    type: ADD_TO_CART,
    product
  }
}

const updateCart = product => {
  return {
    type: UPDATE_CART,
    product
  }
}

const removeItem = product => {
  return {
    type: REMOVE_ITEM,
    product
  }
}

//thunks

export const fetchCart = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/orders/users/${userId}/cart`)
    const orderInfo = res.data.orderInfo
    const cartProducts = res.data.cartProducts
    dispatch(getCart(orderInfo, cartProducts))
  } catch (err) {
    console.log(err)
  }
}

export const _addToCart = (product, userId, cartId) => async dispatch => {
  try {
    const {price, id} = product
    const res = await axios.post(
      `/api/orders/users/${userId}/cart/${cartId}/add`,
      {price, id}
    )
    dispatch(addToCart(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const _updateCart = (quantity, cartId, userId) => async dispatch => {
  try {
    const res = await axios.put(
      `/api/orders/users/${userId}/cart/${cartId}/update`,
      quantity
    )
    console.log(res.data)
    dispatch(updateCart(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const _removeItem = (cartId, userId) => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/orders/users/${userId}/cart/${cartId}/delete`
    )
    dispatch(removeItem(res.data))
  } catch (error) {
    console.log(error)
  }
}

const handleAddToCartState = (state, action) => {
  if (state.cartProducts.length === 0) {
    //add item to empty cart
    return [action.product]
  }
  //check if product already exists in cart
  const filteredCart = state.cartProducts.filter(
    prod => prod.productId === action.product.productId
  )
  if (filteredCart.length === 0) {
    return [...state.cartProducts, action.product]
  }
  //update item in cart
  const updatedProducts = state.cartProducts.map(prod => {
    if (prod.productId === action.product.productId) {
      return action.product
    }
    return prod
  })
  return updatedProducts
}
//if item doesn't exist, add to items in cart

export default function(state = cartState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        orderInfo: action.orderInfo,
        cartProducts: action.cartProducts
      }
    case ADD_TO_CART:
      const newCartProducts = handleAddToCartState(state, action)
      return {
        ...state,
        cartProducts: newCartProducts
      }
    case UPDATE_CART:
      return action.product
    default:
      return state
  }
}
