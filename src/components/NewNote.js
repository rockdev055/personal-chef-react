import React, { Component } from "react";
import NewNoteForm from "./NewNoteForm";

class NewNote extends Component {
  submit = values => {
    console.log("submitting new note", values);
  };

  render() {
    return (
      <div>
        <NewNoteForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default NewNote;
