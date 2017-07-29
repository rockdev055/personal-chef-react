import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Households from './components/Households'

const households = [
  { id: 1, name: "Bosco", address: "7668 Jerde Cliff", monthly_rate: 5761},
  { id: 2, name: "Lockman", address: "78743 Muller Roads", monthly_rate: 7260},
  { id: 3, name: "Volkman", address: "9134 Dante Valley", monthly_rate: 1295},

]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <Nav />
        </div>
        <div className="households">
          <Households households={households} />
        </div>
      </div>
    );
  }
}

export default App;
