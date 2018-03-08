import 'react-datepicker/dist/react-datepicker.css'
import '../App.css'
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import styled from 'styled-components'

const StyledForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

class NewEngagementForm extends Component {
  state = {
    startDate: moment(),
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    })
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state.startDate)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <StyledForm>
          <Form.Field>
            <DatePicker
              onChange={this.handleChange}
              selected={this.state.startDate}
              dateFormat="LL"
            />
          </Form.Field>
          <Form.Button primary>Create Cook Date</Form.Button>
        </StyledForm>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'newEngagement',
})(NewEngagementForm)
