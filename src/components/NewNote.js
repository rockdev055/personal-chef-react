import React, { Component } from "react"
import { connect } from "react-redux"
import NewNoteForm from "./NewNoteForm"
import { createNote } from "../redux/modules/Notes/actions"

class NewNote extends Component {
  submit = values => {
    this.props.createNote(this.props.householdId, values)
  }

  render() {
    return (
      <div>
        <NewNoteForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect(null, { createNote })(NewNote)
