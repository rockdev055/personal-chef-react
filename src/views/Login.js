import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { login } from '../redux/modules/Auth/actions';

class Login extends Component {
  submit = values => {
    const { login, history } = this.props;
    login(values, history);
  };

  render() {
    return (
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as="h2" textAlign="center">
            Log-in to your account
          </Header>
          <LoginForm onSubmit={this.submit} />
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { login })(Login);

// <div>
//   <h3>Login</h3>
//   <LoginForm onSubmit={this.submit} />
// </div>
