import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewHouseholdMemberForm from './NewHouseholdMemberForm'
import { Card, Container } from 'semantic-ui-react'

import { createHouseholdMember } from '../redux/modules/Members/actions'

class NewHouseholdMember extends Component {

  submit = (values) => {
    this.props.createHouseholdMember(values, this.props.id)
  }

  render() {
    return (
      <div>
        <Card.Header>
          <Container textAlign="center">
            <h2>Create A New Member</h2>
          </Container>
        </Card.Header>
        <NewHouseholdMemberForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null, { createHouseholdMember })(NewHouseholdMember)