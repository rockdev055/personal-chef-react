import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import numeral from 'numeral';

const StyledLead = styled.div`
  width: 31%;
  text-align: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
`;

const LeadCard = ({ name, id, address, monthly_rate: monthlyRate }) => (
  <StyledLead>
    <h1>
      <Link to={`/households/leads/${id}`}>{name}</Link>
    </h1>
    <h3>{address}</h3>
    <h4>Potential Monthly: {numeral(monthlyRate).format('$0,0.00')}</h4>
  </StyledLead>
);

LeadCard.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  monthly_rate: PropTypes.number,
  id: PropTypes.number,
};

export default LeadCard;
