import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ClientCard from '../views/ClientCard';

const StyledLeads = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class ClientsContainer extends Component {
  render() {
    const { clients } = this.props;
    const clientList = clients.map(c => <ClientCard key={c.id} {...c} />);
    const monthly = clients.reduce((a, b) => a + b.monthly_rate, 0);
    return (
      <Container>
        {monthly}
        <StyledLeads>{clientList}</StyledLeads>
      </Container>
    );
  }
}

ClientsContainer.propTypes = {
  clients: PropTypes.array,
};

export default ClientsContainer;
