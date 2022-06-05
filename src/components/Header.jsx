import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <Link to='/' >
          <img src={logo} alt="logo" />
        </Link> &nbsp;
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header