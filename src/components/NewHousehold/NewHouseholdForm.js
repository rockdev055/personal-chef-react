import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment, Checkbox } from 'semantic-ui-react';

import styled from 'styled-components';

export const StyledForm = styled.div`
  ul {
    max-width: 800px;
    margin: 0 auto;
  }
  li {
    display: flex;
    flex-wrap: wrap;
    alignitems: center;
    justifycontent: space-between;
    marginbottom: 20px;
  }
  label {
    flex: 1 0 120px;
    max-width: 220px;
  }
  input {
    flex: 1 0 220px;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid gray;
    :focus: {
      outline: 'none';
    }
  }

  button {
    margin-left: auto;
    padding: 8px 16px;
    border: none;
    background: #333;
    color: #f2f2f2;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    border-radius: 2px;
  }
`;

class NewHouseholdForm extends Component {
  state = { name: '', client: false, address: '', monthly_rate: '' };

  onChange = e => {
    console.log(e.target.type);
    const { target } = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { onSubmit } = this.props;
    const { name, address, monthly_rate: monthlyRate, client } = this.state;
    return (
      <Form
        data-testid="household-form"
        size="large"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(this.state);
        }}
      >
        <Segment stacked>
          <Form.Input
            placeholder="Family Name"
            name="name"
            onChange={this.onChange}
            type="text"
            id="name"
            value={name}
          />
          <Form.Input
            name="address"
            placeholder="Address"
            id="address"
            type="text"
            value={address}
            onChange={this.onChange}
          />
          <Form.Input
            name="monthly_rate"
            placeholder="Potential Monthly Rate"
            id="monthly_rate"
            type="text"
            value={monthlyRate}
            onChange={this.onChange}
          />
          <Form.Field>
            <label htmlFor="client">Client?</label>
            <input
              name="client"
              id="client"
              textAlign="center"
              type="checkbox"
              checked={client}
              onChange={this.onChange}
            />
          </Form.Field>
          <Button fluid size="large">
            Create Lead
          </Button>
        </Segment>
      </Form>
    );
  }
}

NewHouseholdForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default NewHouseholdForm;
