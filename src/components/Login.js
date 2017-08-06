import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../redux/modules/Auth/actions'

class Login extends Component {
  submit = (values) => this.props.login(values, this.props.history)
  
  render() {
    return (
      <div>
        <h3>Login</h3>
        <LoginForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null, { login })(Login)