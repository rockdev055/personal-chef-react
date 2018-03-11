import React, { Component } from 'react'
import { connect } from 'react-redux'
import Meal from '../views/Meal'
import NewMeal from '../components/NewMeal'
import { Container } from 'semantic-ui-react'
import { Link, Route, Switch } from 'react-router-dom'

class MealsContainer extends Component {
  render() {
    return (
      <Container textAlign="center">
        <h1>All Meals</h1>
        <ul>
          {this.props.meals.map(m =>
            <Link key={m.id} to={`/meals/${m.id}`}>
              <h3 style={{ listStyleType: 'none' }}>
                {m.name}
              </h3>
            </Link>
          )}
        </ul>
        <Switch>
          <Route path="/meals/new" component={NewMeal} />
          <Route exact path={`/meals/:id`} render={() => <Meal />} />
        </Switch>
      </Container>
    )
  }
}

export default connect(state => {
  return {
    meals: state.meals,
  }
})(MealsContainer)
