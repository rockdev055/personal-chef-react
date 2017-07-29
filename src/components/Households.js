import React from 'react'
import Household from './Household'

const Households = (props) => {
  const { households } = props
  return (<div>{households.map(household => <p key={household.id}>{household.name}</p>)}</div>)
}

export default Households