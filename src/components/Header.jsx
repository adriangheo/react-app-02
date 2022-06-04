import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <div>
        <Link to='/' >
          <img src={logo} alt="logo" />
        </Link> &nbsp;
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header