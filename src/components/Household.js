import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

class Household extends Component {
  render() {
    const { households } = this.props
    const id = parseInt(this.props.match.params.id)
    const household = households.find(h => h.id === id)

    if (household) {
      return (
        <div>
          <h3>{household.name}</h3>
          <p>{household.address}</p>
          <p>{numeral(household.monthly_rate).format('$0,0.00')}</p>
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