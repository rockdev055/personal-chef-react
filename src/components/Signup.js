import React, { Component } from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { signup } from '../redux/modules/Auth/actions'

class Signup extends Component {
  submit = (values) => {this.props.signup(values)}

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Sign up for an Account</h2>
        <SignupForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null, { signup })(Signup)