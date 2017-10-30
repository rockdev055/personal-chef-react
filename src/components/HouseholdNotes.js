import React from "react";
import { List } from "semantic-ui-react";
import format from "date-fns/format";

const HouseholdNotes = ({ notes }) => {
  return (
    <List>
      {notes.map(n =>
        <List.Item key={n.id}>
          {format(new Date(n.created_at), "MMMM Do, YYYY")} - {n.content}
        </List.Item>
      )}
    </List>
  );
};

export default HouseholdNotes;
