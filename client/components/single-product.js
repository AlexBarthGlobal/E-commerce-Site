import React from 'react'
import {connect} from 'react-redux'
import {fetchProductDetails} from '../store'

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchProductDetails(this.props.match.params.productId)
  }

  render() {
    const product = this.props.currentProduct
    return (
      <React.Fragment>
        <img src={product.picture} />
        <div id="single-product" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button type="submit">Add To Cart</button>
          <p>{product.description}</p>
        </div>
      </React.Fragment>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    currentProduct: state.product.currentProduct
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProductDetails: id => dispatch(fetchProductDetails(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
