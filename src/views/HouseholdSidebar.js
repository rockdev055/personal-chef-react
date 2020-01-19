import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const rule = css({
  display: 'block',
  padding: '.4em 0',
  transition: 'all 0.5s ease',
  color: 'black',
  ':hover': {
    padding: '.4em 1em',
    color: 'white',
    background: 'hsl(0, 0%, 20%)',
  },
});

const HouseholdSidebar = ({ households, url }) => (
  <div>
    {households.map(h => (
      <Link {...rule} key={h.id} to={`${url}/${h.id}`}>
        {h.name}
      </Link>
    ))}
  </div>
);

HouseholdSidebar.propTypes = {
  households: PropTypes.array,
  url: PropTypes.string,
};

export default HouseholdSidebar;
