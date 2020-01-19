import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Meal = ({ meal }) =>
  meal ? (
    <div>
      <h1>Meal Card</h1>
      <h3>{meal.name}</h3>
      <p>
        <a target="_blank" rel="noopener noreferrer" href={meal.url}>
          {meal.url}
        </a>
      </p>
      <h2>Notes</h2>
      {meal.notes}
    </div>
  ) : null;

Meal.propTypes = {
  meal: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  meal: state.meals.find(m => m.id === +ownProps.match.params.id),
});

export default withRouter(connect(mapStateToProps)(Meal));
