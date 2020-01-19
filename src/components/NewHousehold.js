import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewHouseholdForm from './NewHouseholdForm';

import { createHousehold } from '../redux/modules/Households/actions';

class NewHousehold extends Component {
  submit = values => {
    const { createHousehold, history } = this.props;
    createHousehold(values, history);
  };

  render() {
    return (
      <div>
        <h2>Create A New Family</h2>
        <NewHouseholdForm onSubmit={this.submit} />
      </div>
    );
  }
}

NewHousehold.propTypes = {
  createHousehold: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { createHousehold })(NewHousehold);
