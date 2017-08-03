import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HouseholdSidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.households.map(h => <h4 key={h.id}><Link to={`${this.props.url}/${h.id}`}>{h.name}</Link></h4>)}
      </div>
    )
  }
}

export default HouseholdSidebar