import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import HouseholdsContainer from './components/HouseholdsContainer'
import HouseholdService from './services/HouseholdService'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/households" component={HouseholdsContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
