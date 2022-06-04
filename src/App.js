import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <div>
        React App 02
        <Home/>
      </div>
    )
  }
}

export default App;
