import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMeals } from  '../redux/modules/Meals/actions'
import Meal from './Meal'

class MealsContainer extends Component {

  componentDidMount() {
    this.props.fetchMeals()
  }
  render() {
    return (
      <div>
        <h1>All Meals</h1>
        {this.props.meals.map(m => <Meal key={m.id} {...m} />)}
      </div>
    )
  }
}

export default connect(state => {
  return {
    meals: state.meals
  }
}, { fetchMeals })(MealsContainer)