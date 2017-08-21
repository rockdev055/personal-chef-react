import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

class Household extends Component {

  handleOnChange = (id) => {
    const householdId = parseInt(this.props.match.params.id)
    // make a call to a prop method to add the meal selected to the current household
  }

  render() {
    const { households, meals } = this.props
    const id = parseInt(this.props.match.params.id)
    const household = households.find(h => h.id === id)

    if (household) {
      return (
        <div>
          <h3>{household.name}</h3>
          <p>{household.address}</p>
          <p>{numeral(household.monthly_rate).format('$0,0.00')}</p>
          {meals.map(m => (<span key={m.id}><span>{m.name}</span><input onChange={() => this.handleOnChange(m.id)} type="checkbox" value="`${m.id}`" /></span>))}
        </div>
      )
    } else {
      return null
    }

  }
}

export default connect(state => {
  return {
    households: state.households,
    meals: state.meals
  }
})(Household)