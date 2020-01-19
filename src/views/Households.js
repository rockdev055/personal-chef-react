import React from 'react';
import PropTypes from 'prop-types';

const Households = ({ households }) => (
  <div>
    {households.map(household => (
      <p key={household.id}>{household.name}</p>
    ))}
  </div>
);

Households.propTypes = {
  households: PropTypes.array,
};

export default Households;
