import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Page404 from './pages/Page404.jsx';
import Category from './pages/Category';
import Cart from './pages/Cart';


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

        <Switch>
          <Route
            exact
            path="/login"
            render={(props) => <Login 
              {...props}
            />}
          />
           <Route 
            exact
            path='/'  
            render={(props) => <Home {...props} signOut={signOut} user={user}/>}
          />
          <Route path='/about' exact component={About} />
          <Route path='/category/:categoryName' exact component={Category}/>
          <Route exact path='/cart' component={Cart}/>
          <Route path='*' component={Page404} />
        </Switch>
      </div>
    )
  }
}

export default App;