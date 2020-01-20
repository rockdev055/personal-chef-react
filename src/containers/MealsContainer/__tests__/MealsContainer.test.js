import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import MealsContainer from '..';
import store from '../../../redux/store';

afterEach(cleanup);

describe('<MealsContainer />', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MealsContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
