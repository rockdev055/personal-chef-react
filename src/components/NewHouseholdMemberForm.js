import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { css } from 'glamor'

class NewHouseholdMemberForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <ul {...ul}>
          <li {...styles}>
            <label {...styles2} htmlFor="first_name">First Name</label>
            <Field {...styles3} name="first_name" component="input" type="text" />
          </li>
          <li {...styles}>
            <label {...styles2} htmlFor="last_name">Last Name</label>
            <Field {...styles3} name="last_name" component="input" type="text" />
          </li>
          <li {...styles}>
            <label {...styles2} htmlFor="email">Email</label>
            <Field {...styles3} name="email" component="input" type="text" />
          </li>
          <li {...styles}>
            <label {...styles2} htmlFor="phone_number">Phone Number</label>
            <Field {...styles3} name="phone_number" component="input" type="text" />
          </li>
          <li {...styles}>
            <button {...btnStyle} type="submit">Create Member</button>
          </li>
        </ul>
      </form>
    )
  }
}

export default reduxForm({
  form: 'newHouseholdMember'
})(NewHouseholdMemberForm)

const styles = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  // maxWidth: '800px',
  marginBottom: '20px'
})

const ul = css({
  maxWidth: '800px',
  margin: '0 auto'
})

const styles2 = css({
  flex: '1 0 120px',
  maxWidth: '220px'
})

const styles3 = css({
  flex: '1 0 220px',
  padding: '15px',
  borderRadius: '15px',
  border: '2px solid gray',
  ':focus': {
    outline: 'none'
  }
})

const btnStyle = css({
  marginLeft: 'auto',
  padding: '8px 16px',
  border: 'none',
  background: '#333',
  color: '#f2f2f2',
  textTransform: 'uppercase',
  letterSpacing: '.09em',
  borderRadius: '2px'
})