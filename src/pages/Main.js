import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Portfolio from "./Portfolio"
import About from "./About"
import M from "materialize-css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class Main extends Component {

  state = {
    about: "",
    contact: "",
    portfolio: ""
  }
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <Router>
        <Navbar
          about={this.state.about}
          contact={this.state.contact}
          portfolio={this.state.contact}
        />
        <main className="center container">
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Portfolio />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    )
  }
}

