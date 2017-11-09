import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import NewEngagementForm from './NewEngagementForm'

class NewEngagement extends Component {
  submit = values => {
    console.log('submitted', values)
  }

  render() {
    return (
      <div>
        <Card.Header>
          <Container textAlign="center">
            <h2>Create A New NewEngagement</h2>
          </Container>
          <NewEngagementForm onSubmit={this.submit} />
        </Card.Header>
      </div>
    )
  }
}

export default NewEngagement
