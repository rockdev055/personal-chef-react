import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Meal = props => {
  return props.meal
    ? <div>
        <h1>Meal Card</h1>
        <h3>
          {props.meal.name}
        </h3>
        <p>
          <a target="_blank" href={props.meal.url}>
            {props.meal.url}
          </a>
        </p>
        <h2>Notes</h2>
        {props.meal.notes}
      </div>
    : null
}

const mapStateToProps = (state, ownProps) => {
  return {
    meal: state.meals.find(m => m.id === +ownProps.match.params.id),
  }
}

export default withRouter(connect(mapStateToProps)(Meal))
