import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import { createHouseholdMeal } from '../redux/modules/HouseholdMeals/actions'

class Household extends Component {
 
  handleOnChange = (id) => {
    const householdId = parseInt(this.props.match.params.id, 10)
    this.props.createHouseholdMeal(id, householdId)
  }

  render() {
    const { households, meals } = this.props
    const id = parseInt(this.props.match.params.id, 10)
    const household = households.find(h => h.id === id)
  
    if (household) {

      const mealsNotAssociated = meals.filter(m => !household.meal_ids.includes(m.id))
      const mealsAssociated = meals.filter(m => household.meal_ids.includes(m.id))
      return (
        <div>
          <h3>{household.name}</h3>
          <p>{household.address}</p>
          <p>{numeral(household.monthly_rate).format('$0,0.00')}</p>
          {mealsNotAssociated.map(m => (<span key={m.id}><span>{m.name}</span><input onChange={() => this.handleOnChange(m.id)} type="checkbox" value={m.id} /></span>))}
          <div>
            <h2>Meals</h2>
            {mealsAssociated.map(m => <p key={m.id}>{m.name}</p>)}
          </div>
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
}, { createHouseholdMeal })(Household)