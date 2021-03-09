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

const CHECKOUT_CART = 'CHECKOUT_CART'

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

const removeItem = productId => {
  return {
    type: REMOVE_ITEM,
    productId
  }
}
const checkoutCart = completedOrder => {
  return {
    type: CHECKOUT_CART,
    completedOrder
  }
}

//thunks

export const fetchCart = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/orders/users/${userId}/`)
    const orderInfo = res.data.orderInfo
    const cartProducts = res.data.cartProducts
    dispatch(getCart(orderInfo, cartProducts))
  } catch (err) {
    console.log(err)
  }
}

export const _addToCart = (product, cartId) => async dispatch => {
  try {
    const {price, id, name, picture} = product
    const res = await axios.post(`/api/orders/${cartId}/add`, {
      price,
      id,
      name,
      picture
    })
    dispatch(addToCart(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const _updateCart = (quantity, cartId, productId) => async dispatch => {
  try {
    const res = await axios.put(`/api/orders/${cartId}/update`, {
      productId: productId,
      quantity: quantity
    })
    console.log(res.data)
    dispatch(updateCart(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const _removeItem = (cartId, productId) => async dispatch => {
  try {
    const res = await axios.delete(`/api/orders/${cartId}/delete`, {
      data: {data: productId}
    })
    console.log('removeItem Axios', res)
    dispatch(removeItem(productId))
  } catch (error) {
    console.log(error)
  }
}
export const _checkoutCart = (
  cartId,
  user,
  address,
  payment
) => async dispatch => {
  try {
    const res = await axios.put(`/api/orders/${cartId}/checkout`, {
      user,
      address,
      payment
    })
    dispatch(checkoutCart(res.data))
  } catch (err) {
    console.error(err)
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
      // eslint-disable-next-line no-case-declarations
      const updatedProducts = state.cartProducts.map(prod => {
        if (prod.productId === action.product.productId) {
          return action.product
        }
        return prod
      })

      return {
        ...state,
        cartProducts: updatedProducts
      }
    case REMOVE_ITEM:
      const updatedCart = state.cartProducts.filter(
        product => product.productId !== action.productId
      )
      return {...state, cartProducts: updatedCart}

    case CHECKOUT_CART:
      return {
        ...state,
        orderInfo: action.completedOrder,
        cartProducts: []
      }

    default:
      return state
  }
}
