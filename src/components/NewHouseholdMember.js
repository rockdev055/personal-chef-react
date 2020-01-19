import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Container } from 'semantic-ui-react';
import NewHouseholdMemberForm from './NewHouseholdMemberForm';

import { createHouseholdMember } from '../redux/modules/Members/actions';

class NewHouseholdMember extends Component {
  submit = values => {
    const { createHouseholdMember, id } = this.props;
    createHouseholdMember(values, id);
  };

  render() {
    return (
      <div>
        <Card.Header>
          <Container textAlign="center">
            <h2>Create A New Member</h2>
          </Container>
        </Card.Header>
        <NewHouseholdMemberForm onSubmit={this.submit} />
      </div>
    );
  }
}

NewHouseholdMember.propTypes = {
  createHouseholdMember: PropTypes.func,
  id: PropTypes.number,
};

export default connect(null, { createHouseholdMember })(NewHouseholdMember);
