import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { signup } from '../redux/modules/Auth/actions';

class Signup extends Component {
  submit = values => {
    const { signup, history } = this.props;
    signup({ user: values }, history);
  };

  render() {
    return (
      <div>
        <h2>Sign up for an Account</h2>
        <SignupForm onSubmit={this.submit} />
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { signup })(Signup);
