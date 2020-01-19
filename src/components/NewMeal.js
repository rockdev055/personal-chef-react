import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import NewMealForm from './NewMealForm';
import { createMeal } from '../redux/modules/Meals/actions';

const h2 = css({
  textAlign: 'center',
});

class NewMeal extends Component {
  submit = values => {
    const { createMeal, history } = this.props;
    createMeal(values, history);
  };

  render() {
    return (
      <div {...h2}>
        <h2>Create a New Meal</h2>
        <NewMealForm onSubmit={this.submit} />
      </div>
    );
  }
}

NewMeal.propTypes = {
  createMeal: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { createMeal })(NewMeal);
