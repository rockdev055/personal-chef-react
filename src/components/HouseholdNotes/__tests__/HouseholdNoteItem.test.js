import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HouseholdNoteItem from '../HouseholdNoteItem';

afterEach(cleanup);

describe('<HouseholdNoteItem /> component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<HouseholdNoteItem />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('does not render if a note prop is not provided', () => {
    const { queryByTestId } = render(<HouseholdNoteItem />);
    expect(queryByTestId('household-note-item')).toBeFalsy();
  });

  it('renders if a note prop is provided', () => {
    const note = { id: 2, created_at: '2018-11-05T22:37:48.340Z', content: 'Spoke with the client again.' };
    const { queryByTestId } = render(<HouseholdNoteItem note={note} />);
    expect(queryByTestId('household-note-item')).toBeTruthy();
  });
});
