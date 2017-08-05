import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import HouseholdsContainer from './components/HouseholdsContainer'
import Signup from './components/Signup'
import { authenticate, authenticationFailure } from './redux/modules/Auth/actions'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token')

    if (token) {
      this.props.authenticate()
    } else {
      this.props.authenticationFailure()
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/households" component={HouseholdsContainer} />
            <Route path="/signup" component={Signup} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { authenticate, authenticationFailure })(App);
