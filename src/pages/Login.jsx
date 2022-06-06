import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login(props) {
  // console.log(props);
  const {signInWithGoogle, history} = props; //destructuring

  function handleButtonClick(){
    //TODO: improve signInWithGoogle implementation
    signInWithGoogle(); //call to signInWithGoogle() v1
    history.push('/'); //redirect to homepage
  }

  return (
    <div className='login-parent'>
        <h1>Login</h1>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <button onClick={handleButtonClick}>Google SignIn</button>
    </div>
  )
}

export default Login