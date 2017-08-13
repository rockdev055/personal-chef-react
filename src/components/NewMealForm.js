import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class NewMealForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="name">Meal Name</label>
        <Field name="name" component="input" type="text" />
        <button>Create Meal</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'newMeal'
})(NewMealForm)