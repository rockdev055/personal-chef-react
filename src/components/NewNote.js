import React, { Component } from "react";
import NewNoteForm from "./NewNoteForm";

class NewNote extends Component {
  submit = values => {
    console.log("submitting new note", values);
  };

  render() {
    return (
      <div>
        <h1>Create a new Note</h1>
        <NewNoteForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default NewNote;
