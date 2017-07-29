import React from 'react'

const Household = (props) => {
  // console.log(props)
  const { name } = props
  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}

export default Household