import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Households from './components/Households'
import HouseholdService from './services/HouseholdService'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const households = [
  { id: 1, name: "Bosco", address: "7668 Jerde Cliff", monthly_rate: 5761},
  { id: 2, name: "Lockman", address: "78743 Muller Roads", monthly_rate: 7260},
  { id: 3, name: "Volkman", address: "9134 Dante Valley", monthly_rate: 1295},

]

class App extends Component {
  constructor() {
    super()
    this.state = {
      households: []
    }
  }
  componentDidMount() {
    HouseholdService.fetchHouseholds().then(households => this.setState({
      households: households
    }))
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/households" render={() => <Households households={this.state.households} /> } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
