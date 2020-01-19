import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { StyledForm } from './NewHouseholdForm';

class SignupForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="first_name">First Name: </label>
              <Field name="first_name" component="input" type="text" />
            </li>
            <li>
              <label htmlFor="last_name">Last Name: </label>
              <Field name="last_name" component="input" type="text" />
            </li>
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
              <button type="submit">Submit</button>
            </li>
          </ul>
        </form>
      </StyledForm>
    );
  }
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'signup',
})(SignupForm);
