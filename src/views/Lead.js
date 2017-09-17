import React, { Component } from 'react'
import styled from 'styled-components'

const StyledLead = styled.div`
  width: 31%;
  text-align: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
`

const Lead = (props) => {
  const _onClick = () => {
    props.convert(props.id)
  }
  return (
    <StyledLead>
      <h1>{props.name}</h1>
      <h3>{props.address}</h3>
      <button onClick={_onClick}>Convert Client</button>
    </StyledLead>
  )
}

export default Lead