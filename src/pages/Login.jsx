import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { signInWithGoogle} from '../apis/firebase'

function Login(props) {
  const {history} = props;
  
  function handleGoogleLogin(){
    const googleLoginResponse = signInWithGoogle();
    googleLoginResponse.then((response) => {
        console.log(response);
      history.push('/');
    });
  }

  return (
    <div className='login-parent'>
        <h1>Login</h1>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <button onClick={handleGoogleLogin}>Google SignIn</button>
    </div>
  )
}

export default Login