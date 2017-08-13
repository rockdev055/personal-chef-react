import React, { Component } from 'react'
import NewMealForm from './NewMealForm'

class NewMeal extends Component{ 
  
  submit = (values) => console.log(values)

  render() {
    return (
      <div>
        <h2>Create a new meal</h2>
        <NewMealForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default NewMeal