import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Page404 from './pages/Page404.jsx';
import Category from './pages/Category';
// firebase imports
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './configs/firebase';



const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    console.log(this.props);

    return(
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/about' exact component={About} />
          <Route path='/category/:categoryName' exact component={Category}/>

          <Route path='*' component={Page404} />
        </Switch>
      </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);