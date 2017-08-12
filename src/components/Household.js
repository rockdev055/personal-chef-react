import React, { Component } from 'react'
import { connect } from 'react-redux'
import HouseholdService from '../services/HouseholdService'

class Household extends Component {
  render() {
    const { households } = this.props
    const id = this.props.match.params.id
    const household = households.find(h => h.id == id)
    if (household) {
      return (
        <div>
          <h3>{household.name}</h3>
        </div>
      )
    } else {
      return null
    }

  }
}

export default connect(state => {
  return {
    households: state.households
  }
})(Household)