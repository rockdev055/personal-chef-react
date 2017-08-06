import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Login extends Component {
  submit = (values) => console.log(values)
  
  render() {
    return (
      <div>
        <h3>Login</h3>
        <LoginForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default Login