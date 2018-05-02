import React, { Component } from 'react'
import { connect } from 'react-redux'
import Meal from '../views/Meal'
import NewMeal from '../components/NewMeal'
import { Container } from 'semantic-ui-react'
import { Link, Route, Switch } from 'react-router-dom'
import { css } from 'glamor'

class MealsContainer extends Component {
  render() {
    return (
      <Container>
        <div {...gridContainer}>
          <div {...gridNav}>
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
          </div>
          <div {...gridMain}>
            <Switch>
              <Route path="/meals/new" component={NewMeal} />
              <Route exact path={`/meals/:id`} render={() => <Meal />} />
            </Switch>
          </div>
        </div>
      </Container>
    )
  }
}

export default connect(({ meals }) => ({ meals }))(MealsContainer)

let gridContainer = css({
  marginTop: '20px',
  display: 'grid',
  gridTemplateAreas: `"navigation main main"`,
})

let gridNav = css({
  gridArea: 'navigation',
})

let gridMain = css({
  gridArea: 'main',
})
