import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Page404 from './pages/Page404.jsx';
import Category from './pages/Category';
import Cart from './pages/Cart';
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
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    // console.lo usg(user);

    return(
      <div>
        <div>
          {/* <header className="App-header" style={{"min-height": "unset"}}>
            {
              user 
                ? <p>Hello, {user.displayName}</p>
                : <p>Please sign in.</p>
            }
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
          </header> */}
        </div>
        <Switch>
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} signInWithGoogle={signInWithGoogle} />}
          />
           <Route 
            exact
            path='/'  
            render={(props) => <Home {...props} signOut={signOut} user={user}/>}
          />
          <Route path='/about' exact component={About} />
          <Route path='/category/:categoryName' exact component={Category}/>
          <Route  path='/cart' exact component={Cart}/>
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