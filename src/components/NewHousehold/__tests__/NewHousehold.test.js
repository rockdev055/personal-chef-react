import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import NewHousehold from '../index';

afterEach(cleanup);

describe('<NewHousehold /> component', () => {
  it('matches the snapshop', () => {
    const { container } = render(
      <Provider store={store}>
        <NewHousehold />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <NewHousehold />
      </Provider>
    );

    expect(getByTestId('page-header').textContent).toBe('Create A New Family');
  });

  it('renders the new household form', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <NewHousehold />
      </Provider>
    );

    expect(getByTestId('household-form')).toBeTruthy();
  });

  it('submits the form correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <NewHousehold />
      </Provider>
    );

    fireEvent.click(getByText('Create Lead'));
  });
});
