import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import NewHouseholdForm from '../NewHouseholdForm';

afterEach(cleanup);

const onSubmit = jest.fn();

describe('<NewHouseholdForm />', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <NewHouseholdForm handleSubmit={onSubmit} />
      </Provider>
    );

    expect(getByTestId('household-form')).toBeTruthy();
    fireEvent.click(getByText('Create Lead'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
