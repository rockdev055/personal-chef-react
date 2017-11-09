import 'react-datepicker/dist/react-datepicker.css'
import '../App.css'
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import styled from 'styled-components'

const StyledForm = styled.div`width: 100%;`

class NewEngagementForm extends Component {
  state = {
    startDate: moment()
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }
  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field width={5}>
          <StyledForm>
            <DatePicker
              onChange={this.handleChange}
              selected={this.state.startDate}
              showTimeSelect
            />
          </StyledForm>
        </Form.Field>
        <Form.Field>
          <Field name="email" component="input" type="text" />
        </Form.Field>
        <input type="submit" />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'newEngagement'
})(NewEngagementForm)
