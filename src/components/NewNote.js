import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewNoteForm from './NewNoteForm';
import { createNote } from '../redux/modules/Notes/actions';

class NewNote extends Component {
  submit = values => {
    const { createNote, householdId } = this.props;
    createNote(householdId, values);
  };

  render() {
    return (
      <div>
        <NewNoteForm onSubmit={this.submit} />
      </div>
    );
  }
}

NewNote.propTypes = {
  createNote: PropTypes.func,
  householdId: PropTypes.number,
};

export default connect(null, { createNote })(NewNote);
