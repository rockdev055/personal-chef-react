import React from "react"
import { connect } from "react-redux"

const EngagementMeals = props => {
  return (
    <div>
      {props.meals.map(m =>
        <p key={`meal-${m.id}`}>
          <a target="_blank" href={m.url}>
            {m.name}
          </a>
        </p>
      )}
    </div>
  )
}

export default connect((state, ownProps) => {
  const meals = ownProps.mealIds.map(mealId => {
    return state.meals.find(m => m.id === mealId)
  })
  return {
    meals: meals
  }
})(EngagementMeals)
