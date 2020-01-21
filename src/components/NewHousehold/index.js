import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Header, Message } from 'semantic-ui-react';

import NewHouseholdForm from './NewHouseholdForm';

import { createHousehold } from '../../redux/modules/Households/actions';

class NewHousehold extends Component {
  submit = values => {
    const { createHousehold, history } = this.props;
    createHousehold(values, history);
  };

  render() {
    return (
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as="h2" textAlign="center" data-testid="page-header">
            Create A New Family
          </Header>
          <NewHouseholdForm onSubmit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

NewHousehold.propTypes = {
  createHousehold: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { createHousehold })(NewHousehold);
