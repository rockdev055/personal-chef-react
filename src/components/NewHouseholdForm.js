import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class NewHouseholdForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Family Name</label>
        <Field name="name" component="input" type="text" />
        <label htmlFor="address">Address</label>
        <Field name="address" component="input" type="text" />
        <label htmlFor="monthly_rate">Monthly Rate</label>
        <Field name="monthly_rate" component="input" type="text" />
        <button type="submit">Create Hosuehold</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'newHousehold'
})(NewHouseholdForm)