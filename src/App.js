import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Page404 from "./pages/Page404";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />

          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
