import React from 'react'

export default props =>
  <div>
    <a target="_blank" href={props.url}>
      {props.name}
    </a>
  </div>
