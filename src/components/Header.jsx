import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";
import userEvent from "@testing-library/user-event";
import { connect } from "react-redux";
import { signOut } from "../apis/firebase";

const user = {};

function Header(props) {
  // console.log(props);
  const { numberOfProducts } = props;

  function handleHeaderSignOut() {
    signOut();
  }

  return (
    <div className="header d-flex justify-content-between align-items-center container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div>
        {user ? (
          <div>
            <p>{user.displayName}</p>
            <button onClick={handleHeaderSignOut}>Delogare</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/cart">
          <ShoppingCart className="ml-2" />
        </Link>
        <p>{numberOfProducts}</p>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.products.length,
  };
}

export default connect(mapStateToProps)(Header);
