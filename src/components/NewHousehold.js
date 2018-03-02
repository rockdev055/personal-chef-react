import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewHouseholdForm from './NewHouseholdForm'

import { createHousehold } from '../redux/modules/Households/actions'

class NewHousehold extends Component {
  submit = values => {
    this.props.createHousehold(values, this.props.history)
  }

  render() {
    return (
      <div>
        <h2>Create A New Family</h2>
        <NewHouseholdForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null, { createHousehold })(NewHousehold)
