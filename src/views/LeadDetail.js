import React from 'react'
import { connect } from 'react-redux'

const LeadDetail = (props) => {
  if (props.lead) {
    return (
      <div>
        <h1>Lead Details</h1>
        {props.lead.name}
      </div>
    )
  } else {
    return null
  }
}

export default connect((state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10)
  const lead = state.households.find(h => h.id === id)
  return {
    lead
  }
})(LeadDetail)
