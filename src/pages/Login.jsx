import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import {connect} from 'react-redux';

import { loginUser } from '../redux/actions/user'


class Login extends React.Component {
  componentDidUpdate(prevProps){
    if(this.props.userData !== prevProps.userData){
      this.props.history.push('/');
    }
  }
  
  render(){
    const { loginUser } = this.props;

    return(
    <div className='login-page'>
      <Link to='/'>
        Home
      </Link>
      <h1 className='h2'>Login</h1>
      <p>Alege providerul cu care vrei să te loghezi:</p>
      <button
        classname="btn btn-outline-dark d-flex align-items-center"
        onClick={() => loginUser()}
      >
        <span className='tex-nowrap'>Loghează-te cu Google</span>
      </button>
      <Link to='/register'>Register</Link>
      <button onClick={loginUser()}>Google SignIn</button>
    </div>) 
  }

}

  const mapStateToProps = (state) => {
    return{
      userData: state.user.data
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loginUser: () => { dispatch(loginUser()) }
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(Login);
