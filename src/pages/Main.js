import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
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
  navClick = event => {
    this.setState({
      about: "",
      contact: "",
      portfolio: "",
      [event.target.name]: "active"
    })
  }
  render() {
    return (
      <Router>
        <Navbar
          navClick={this.navClick}
          about={this.state.about}
          contact={this.state.contact}
          portfolio={this.state.contact}
        />
        <main >
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
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

