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

  handleSubmit = () => {
    this.props.handleSubmit(this.state.startDate)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <StyledForm>
            <DatePicker
              onChange={this.handleChange}
              selected={this.state.startDate}
              showTimeSelect
              dateFormat="LLL"
            />
          </StyledForm>
        </Form.Field>

        <input type="submit" />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'newEngagement'
})(NewEngagementForm)
