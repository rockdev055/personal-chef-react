import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import { signup } from '../redux/modules/Auth/actions';

class Signup extends Component {
  submit = values => {
    const { signup, history } = this.props;
    signup({ user: values }, history);
  };

  render() {
    return (
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as="h2" textAlign="center">
            Create your account
          </Header>
          <SignupForm onSubmit={this.submit} />
          <Message>
            Have an account? <Link to="/login">Log in</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { signup })(Signup);
