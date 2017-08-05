import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { signup } from '../redux/modules/Auth/actions'

class Signup extends Component {

  submit = (values) => {
    this.props.signup({user: values}, this.props.history)
  }

  render() {
    return (
      <div>
        <h2>Sign up for an Account</h2>
        <SignupForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null, { signup })(Signup)