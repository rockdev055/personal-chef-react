import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment } from 'semantic-ui-react';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { onSubmit } = this.props;
    const { email, password } = this.state;
    return (
      <Form
        size="large"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(this.state);
        }}
      >
        <Segment stacked>
          <Form.Input
            fluid
            onChange={this.onChange}
            icon="user"
            name="email"
            iconPosition="left"
            placeholder="E-mail address"
            value={email}
          />
          <Form.Input
            name="password"
            onChange={this.onChange}
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={password}
          />

          <Button fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
