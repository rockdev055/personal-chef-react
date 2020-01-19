import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import numeral from 'numeral';

const StyledLead = styled.div`
  width: 31%;
  text-align: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  color: green;
`;

const ClientCard = ({ id, name, address, monthly_rate: monthlyRate }) => (
  <StyledLead>
    <Link style={{ color: 'green' }} to={`/households/clients/${id}`}>
      <h2>{name}</h2>
    </Link>
    <h3>{address}</h3>
    <h3>{numeral(monthlyRate).format('$0,0.00')}</h3>
  </StyledLead>
);

ClientCard.propTypes = {
  monthly_rate: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
};

export default ClientCard;
