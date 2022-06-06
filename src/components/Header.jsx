import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import './Header.css'
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import userEvent from '@testing-library/user-event';


function Header(props) {
  // console.log(props);
  const {signOut, user} = props;

  return (
    
    <div className='header d-flex justify-content-between align-items-center container'>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        <div>
          {
            user
                ? <div>
                  <p>{user.displayName}</p>
                  <button onClick={signOut}>Delogare</button>
                  </div>
                : <Link to='/login'>Login</Link>
          }
          <ShoppingCart />
        </div>
        
    </div>
  )
}

export default Header