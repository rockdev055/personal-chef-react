import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { StyledForm } from './NewHouseholdForm'

class LoginForm extends Component {
  render() {
    return (
      <StyledForm>
        <form onSubmit={this.props.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="email">Email: </label>
              <Field name="email" component="input" type="text" />
            </li>
            <li>
              <label htmlFor="password">Password: </label>
              <Field name="password" component="input" type="password" />
            </li>
            <br />
            <li>
              <button type="submit">Login</button>
            </li>
          </ul>
        </form>
      </StyledForm>
    )
  }
}

export default reduxForm({
  form: 'signup'
})(LoginForm)
