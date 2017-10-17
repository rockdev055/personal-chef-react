import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewHouseholdMemberForm from './NewHouseholdMemberForm'

import { createHouseholdMember } from '../redux/modules/Members/actions'

class NewHouseholdMember extends Component {

  submit = (values) => {
    this.props.createHouseholdMember(values)
  }

  render() {
    return (
      <div>
        <h2>
          Create A New Member
        </h2>
        <NewHouseholdMemberForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null, { createHouseholdMember })(NewHouseholdMember)