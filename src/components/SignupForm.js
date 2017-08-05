import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SignupForm extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name: </label>
          <Field name="first_name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="last_name">Last Name: </label>
          <Field name="last_name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <Field name="email" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <Field name="password" component="input" type="password"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm)

export default SignupForm