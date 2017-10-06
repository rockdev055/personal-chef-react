import React from 'react'
import { Link } from 'react-router-dom'

const ClientCard = (props) => {
  return (
    <div>
      <Link to={`/households/clients/${props.id}`}>{props.name}</Link>
    </div >
  )
}

export default ClientCard