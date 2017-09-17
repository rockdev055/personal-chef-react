import React, { Component } from 'react'
const Lead = (props) => {
  const _onClick = () => {
    props.convert(props.id)
  }
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.address}</h3>
      <button onClick={_onClick}>Convert Client</button>
    </div>
  )
}

export default Lead