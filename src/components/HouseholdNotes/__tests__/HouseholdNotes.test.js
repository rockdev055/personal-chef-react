import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HouseholdNotes from '../index';

afterEach(cleanup);

describe('<HouseholdNotes />', () => {
  it('renders', () => {
    const noteData = [
      { id: 1, created_at: '2018-10-05T22:37:48.340Z', content: 'Spoke with the client.' },
      {
        id: 2,
        created_at: '2018-11-05T22:37:48.340Z',
        content: 'Spoke with the client again.',
      },
    ];
    const { getByTestId } = render(<HouseholdNotes notes={noteData} />);
    expect(getByTestId('household-notes').childNodes.length).toBe(2);
    // expect(getByTestId('household-notes').)
  });
});
