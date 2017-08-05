import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HouseholdSidebar extends Component {

  render() {
    return (
      <div>
        {this.props.households.map(h => <Link key={h.id} to={`${this.props.url}/${h.id}`}><h4>{h.name}</h4></Link>)}
      </div>
    )
  }
}

export default HouseholdSidebar