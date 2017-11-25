import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'

class NewHouseholdMemberForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="first_name">First Name</label>
          <Field name="first_name" component="input" type="text" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="last_name">Last Name</label>
          <Field name="last_name" component="input" type="text" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="phone_number">Phone Number</label>
          <Field name="phone_number" component="input" type="text" />
        </Form.Field>
        <Form.Button primary>Create Member</Form.Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'newHouseholdMember'
})(NewHouseholdMemberForm)
