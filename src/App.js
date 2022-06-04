import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />

          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
