import React from 'react'
import { connect } from 'react-redux'

const LeadDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Lead Details</h1>
      {props.lead.name}
    </div>

  )
}

export default connect((state, ownProps) => {
  const id = ownProps.match.params.id
  const lead = state.households.find(h => h.id == id)
  return {
    lead
  }
})(LeadDetail)
