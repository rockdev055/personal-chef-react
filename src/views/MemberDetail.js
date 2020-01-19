import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MemberDetail = ({ member }) => {
  if (!member) {
    return null;
  }
  return (
    <div>
      <Link to={`/households/clients/${member.household_id}`}>Back to Household</Link>
      <p>
        {member.first_name} {member.last_name}
      </p>
    </div>
  );
};

MemberDetail.propTypes = {
  member: PropTypes.object,
};

export default connect((state, props) => ({
  member: state.members.find(m => m.id === parseInt(props.match.params.id, 10)),
}))(MemberDetail);
