import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS'

/**
 * INITIAL STATE
 */
const defaultState = {
  allProducts: [],
  currentProduct: {}
}

/**
 * ACTION CREATORS
 */
const getProducts = products => ({type: GET_PRODUCTS, products})
const getProductDetails = product => ({type: GET_PRODUCT_DETAILS, product})

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchProductDetails = productId => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${productId}`)
    dispatch(getProductDetails(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.products
      }
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        currentProduct: action.product
      }
    default:
      return state
  }
}
