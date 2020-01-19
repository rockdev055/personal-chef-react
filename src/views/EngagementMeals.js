import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const EngagementMeals = ({ meals }) => (
  <div>
    {meals.map(m => (
      <p key={`meal-${m.id}`}>
        <a target="_blank" rel="noopener noreferrer" href={m.url}>
          {m.name}
        </a>
      </p>
    ))}
  </div>
);

EngagementMeals.propTypes = {
  meals: PropTypes.array,
};

export default connect((state, ownProps) => {
  const meals = ownProps.mealIds.map(mealId => state.meals.find(m => m.id === mealId));
  return {
    meals,
  };
})(EngagementMeals);
