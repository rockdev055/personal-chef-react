import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MemberDetail = ({ member }) => {
  if (!member) {
    return null
  }
  return (
    <div>
      <Link to={`/households/clients/${member.household_id}`}>
        Back to Household
      </Link>
      <p>
        {member.first_name} {member.last_name}
      </p>
    </div>
  )
}

export default connect((state, props) => {
  console.log(parseInt(props.match.params.id, 10))
  return {
    member: state.members.find(m => m.id == parseInt(props.match.params.id, 10))
  }
})(MemberDetail)
