import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { css } from 'glamor';
import NewMeal from '../../components/NewMeal';
import Meal from '../../views/Meal';

const gridContainer = css({
  marginTop: '20px',
  display: 'grid',
  gridTemplateAreas: `"navigation main main"`,
});

const gridNav = css({
  gridArea: 'navigation',
});

const gridMain = css({
  gridArea: 'main',
});

class MealsContainer extends Component {
  render() {
    const { meals } = this.props;
    return (
      <Container>
        <div {...gridContainer}>
          <div {...gridNav}>
            <h1>All Meals</h1>
            <ul>
              {meals.map(m => (
                <Link key={m.id} to={`/meals/${m.id}`}>
                  <h3 style={{ listStyleType: 'none' }}>{m.name}</h3>
                </Link>
              ))}
            </ul>
          </div>
          <div {...gridMain}>
            <Switch>
              <Route path="/meals/new" component={NewMeal} />
              <Route exact path="/meals/:id" render={() => <Meal />} />
            </Switch>
          </div>
        </div>
      </Container>
    );
  }
}

MealsContainer.propTypes = {
  meals: PropTypes.array,
};

export default connect(({ meals }) => ({ meals }))(MealsContainer);
