import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { convertLead } from '../redux/modules/Households/actions';
import LeadCard from '../views/LeadCard';

const StyledLeads = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class LeadsContainer extends Component {
  handleConvert = id => {
    const { convertLead, history } = this.props;
    convertLead(id, history);
  };

  render() {
    const { leads } = this.props;
    return leads.length === 0 ? (
      <h1>Currently No Leads</h1>
    ) : (
      <Container>
        <StyledLeads>
          {leads.map(l => (
            <LeadCard key={l.id} {...l} convert={this.handleConvert} />
          ))}
        </StyledLeads>
      </Container>
    );
  }
}

LeadsContainer.propTypes = {
  leads: PropTypes.array,
  convertLead: PropTypes.func,
  history: PropTypes.object,
};

export default connect(null, { convertLead })(LeadsContainer);
