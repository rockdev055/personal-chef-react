import React from 'react'

const Meal = props => {
  return (
    <div>
      <h1>Meal Card</h1>
      <h3>
        {props.meal.name}
      </h3>
    </div>
  )
}

export default Meal
