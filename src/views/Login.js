import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { login } from '../redux/modules/Auth/actions';

class Login extends Component {
  submit = values => {
    const { login, history } = this.props;
    login(values, history);
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { login })(Login);
