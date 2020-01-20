import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { List } from 'semantic-ui-react';

export default function HouseholdNoteItem({ note }) {
  if (!note) return null;
  return (
    <List.Item data-testid="household-note-item" key={note.id}>
      {format(new Date(note.created_at), 'MMMM Do, YYYY')} - {note.content}
    </List.Item>
  );
}

HouseholdNoteItem.propTypes = {
  note: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
