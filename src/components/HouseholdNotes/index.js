import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HouseholdNoteItem from './HouseholdNoteItem';

const HouseholdNotes = ({ notes }) => (
  <List data-testid="household-notes">
    {notes.map(note => (
      <HouseholdNoteItem key={note.id} note={note} />
    ))}
  </List>
);

HouseholdNotes.propTypes = {
  notes: PropTypes.array,
};

export default HouseholdNotes;
