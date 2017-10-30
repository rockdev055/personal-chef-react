import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "semantic-ui-react";

class NewNoteForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Field
            name="content"
            component="input"
            type="text"
            placeholder="enter new note..."
          />
        </Form.Field>
      </Form>
    );
  }
}

export default reduxForm({
  form: "newNote"
})(NewNoteForm);
