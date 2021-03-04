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
    /* currently this is not handling any new products in the cart correctly -
    they are going to the case on line 90 in which the whole array is overwritten. furthermore, existing products are still not updating properly with the quantity. TBD why.
    */
    case ADD_TO_CART:
      if (state.products.length > 0) {
        const productExists = state.products.filter(curProduct => {
          return curProduct.id === action.product.id
        })

        if (productExists.length > 0) {
          const updatedProducts = state.products.map(curProduct => {
            if (curProduct.id === action.product.id) {
              curProduct = action.product
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
