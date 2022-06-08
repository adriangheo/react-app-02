import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import {connect} from 'react-redux';

import { loginUser } from '../redux/actions/user'

function Login(props) {
  const { history, loginUser } = props;
  
  // function handleGoogleLogin(){
  //   const googleLoginResponse = signInWithGoogle();
  //   googleLoginResponse.then((response) => {
  //       console.log(response);
  //     history.push('/');
  //   });
  // }

  return (
    <div className='login-parent'>
        <h1>Login</h1>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <button onClick={loginUser()}>Google SignIn</button>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return {
    loginUser: () => { dispatch(loginUser()) }
  }
}

export default connect(null, mapDispatchToProps)(Login);