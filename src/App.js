import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import HouseholdsContainer from './components/HouseholdsContainer'
import {
  BrowserRouter as Router,
  Route,
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
