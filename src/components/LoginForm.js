import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <Field name="password" component="input" type="text" />
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signup'
})(LoginForm)