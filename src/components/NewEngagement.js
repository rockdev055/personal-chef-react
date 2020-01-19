import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Container, Divider } from 'semantic-ui-react';
import NewEngagementForm from './NewEngagementForm';
import { createEngagement } from '../redux/modules/Engagements/actions';

class NewEngagement extends Component {
  submit = values => {
    const { createEngagement, id } = this.props;
    createEngagement(id, values.format());
  };

  render() {
    return (
      <div>
        <Card.Header>
          <Container textAlign="center">
            <h2>Create A New Cook Date</h2>
          </Container>
          <Divider />
          <NewEngagementForm handleSubmit={this.submit} />
        </Card.Header>
      </div>
    );
  }
}

NewEngagement.propTypes = {
  createEngagement: PropTypes.func,
  id: PropTypes.number,
};

export default connect(null, { createEngagement })(NewEngagement);
