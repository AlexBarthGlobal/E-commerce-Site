import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navvy">
    <div id="header">
      <h1>Pit's Stop</h1>
    </div>
    <nav id="navbar">
      <NavLink to="/all-products" id="link">
        All Products
      </NavLink>
      <NavLink to="/cart" id="link">
        Cart
      </NavLink>
      {isLoggedIn ? (
        <div id="navbar">
          {/* The navbar will show these links after you log in */}
          <Link to="/home" id="link">
            My Account
          </Link>
          <a href="#" onClick={handleClick} id="link">
            Logout
          </a>
        </div>
      ) : (
        <div id="navbar">
          {/* The navbar will show these links before you log in */}
          <Link to="/login" id="link">
            Login
          </Link>
          <Link to="/signup" id="link">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
    <audio autoPlay controls>
      <source src="music.mp3" type="audio/mp3" />
    </audio>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
