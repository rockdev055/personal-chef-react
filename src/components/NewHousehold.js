import React, { Component } from 'react'
import NewHouseholdForm from './NewHouseholdForm'

class NewHousehold extends Component {

  submit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <div>
        <h2>
          Create A New Household
        </h2>
        <NewHouseholdForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default NewHousehold