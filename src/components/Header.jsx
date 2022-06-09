import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";
import { connect } from "react-redux";
import { signOut } from "../apis/firebase";
import { logoutUser } from '../redux/actions/user'

const user = {};

function Header(props) {
  return (
    <div className="header d-flex justify-content-between align-items-center container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div>
        {user ? (
          <div>
            <p>{user.displayName}</p>
            <button onClick={() => props.signOut()}>Delogare</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/cart">
          <ShoppingCart className="ml-2" />
        </Link>
        <p>{props.numberOfProducts}</p>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.cart.products.length,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      signOut: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);