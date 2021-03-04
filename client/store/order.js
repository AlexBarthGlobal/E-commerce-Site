import axios from 'axios'
import history from '../history'

const cartState = {
  products: []
}

//action types

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

//action creators

const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

const addToCart = product => {
  return {
    type: ADD_TO_CART,
    product
  }
}

//thunks

export const fetchCart = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/orders/users/${userId}/cart`)
    dispatch(getCart(res.data))
  } catch (err) {
    console.log(err)
  }
}

export const _addToCart = (product, userId, cartId) => async dispatch => {
  console.log(product)
  try {
    const {price, id} = product
    const res = await axios.post(
      `/api/orders/users/${userId}/cart/${cartId}/add`,
      {price, id}
    )
    //this is to normalize data with how we recieve it from sequelize on the get cart call.
    const addedProduct = product
    addedProduct.ProductsInCart = res.data
    dispatch(addToCart(addedProduct))
  } catch (err) {
    console.log(err)
  }
}

//reducer

export default function(state = cartState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      console.log()
      if (state.products.length > 0) {
        console.log('state.products exists, is not empty')
        const productExists = state.products.filter(curProduct => {
          return curProduct.id === action.product.id
        })
        console.log(
          '🚀 ~ file: order.js ~ line 70 ~ productExists ~ productExists',
          productExists
        )

        if (productExists.length > 0) {
          console.log('product exists in cart, adding quantity')
          const updatedProducts = state.products.map(curProduct => {
            console.log(
              '🚀 ~ file: order.js ~ line 72 ~ updatedProducts ~ curProduct',
              curProduct
            )
            if (curProduct.id === action.product.id) {
              curProduct = action.product
              console.log(
                '🚀 ~ file: order.js ~ line 75 ~ updatedProducts ~ curProduct',
                curProduct
              )
            }
            return curProduct
          })
          return {
            ...state,
            products: updatedProducts
          }
        }
      }
      return {
        ...state,
        products: [action.product]
      }

    default:
      return state
  }
}
