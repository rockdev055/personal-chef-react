import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

const StyledLead = styled.div`
  width: 31%;
  text-align: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
`

const LeadCard = (props) => {
  const _onClick = () => {
    props.convert(props.id)
  }
  return (
    <StyledLead>
      <h1><Link to={`/households/leads/${props.id}`}>{props.name}</Link></h1>
      <h3>{props.address}</h3>
      <h4>Potential Monthly: {numeral(props.monthly_rate).format('$0,0.00')}</h4>
      <button onClick={_onClick}>Convert Client</button>
    </StyledLead>
  )
}

export default LeadCard