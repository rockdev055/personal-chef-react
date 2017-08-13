import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewMealForm from './NewMealForm'
import { createMeal } from '../redux/modules/Meals/actions'

class NewMeal extends Component{ 
  
  submit = (values) => this.props.createMeal(values, this.props.history)

  render() {
    return (
      <div>
        <h2>Create a new meal</h2>
        <NewMealForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null, { createMeal })(NewMeal)