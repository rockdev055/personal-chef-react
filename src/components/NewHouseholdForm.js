import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

export const StyledForm = styled.div`
  ul {
    max-width: 800px;
    margin: 0 auto;
  }
  li {
    display: flex;
    flex-wrap: wrap;
    alignItems: center;
    justifyContent: space-between;
    marginBottom: 20px;
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
    letter-spacing: .09em;
    border-radius: 2px;
  }
`

class NewHouseholdForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="name">Family Name</label>
              <Field name="name" component="input" type="text" />
            </li>
            <li>
              <label htmlFor="address">Address</label>
              <Field name="address" component="input" type="text" />
            </li>
            <li>
              <label htmlFor="monthly_rate">Potential Monthly Rate</label>
              <Field name="monthly_rate" component="input" type="text" />
            </li>
            <li>
              <label htmlFor="client">Client?</label>
              <Field name="client" component="input" type="checkbox" />
            </li>
            <li>
              <button type="submit">Create Lead</button>
            </li>
          </ul>
        </form>
      </StyledForm>
    )
  }
}

export default reduxForm({
  form: 'newHousehold'
})(NewHouseholdForm)
