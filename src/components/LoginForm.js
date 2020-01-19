import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { StyledForm } from './NewHouseholdForm';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="email">
                Email:
                <Field name="email" id="email" component="input" type="text" />
              </label>
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
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'signup',
})(LoginForm);
