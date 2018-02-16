import React, { Component } from 'react'
import { connect } from 'react-redux'
import Meal from '../views/Meal'
import { Container } from 'semantic-ui-react'

class MealsContainer extends Component {
  render() {
    return (
      <Container textAlign="center">
        <h1>All Meals</h1>
        {this.props.meals.map(m => <Meal key={m.id} {...m} />)}
      </Container>
    )
  }
}

export default connect(state => {
  return {
    meals: state.meals,
  }
})(MealsContainer)
