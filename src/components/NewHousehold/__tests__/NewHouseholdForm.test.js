import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import NewHouseholdForm from '../NewHouseholdForm';

afterEach(cleanup);

const onSubmit = jest.fn();

describe('<NewHouseholdForm />', () => {
  it('submits correctly', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <NewHouseholdForm onSubmit={onSubmit} />
      </Provider>
    );

    expect(getByTestId('household-form')).toBeTruthy();
    fireEvent.click(getByText('Create Lead'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('submits with values', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <NewHouseholdForm onSubmit={onSubmit} />
      </Provider>
    );
    fireEvent.change(getByLabelText('Address'), { target: { value: '123 Main Street' } });
    fireEvent.change(getByLabelText('Family Name'), { target: { value: 'James' } });
    fireEvent.change(getByLabelText('Potential Monthly Rate'), { target: { value: '900' } });

    fireEvent.click(getByText('Create Lead'));
    expect(onSubmit).toHaveBeenCalledWith({
      address: '123 Main Street',
      client: false,
      monthly_rate: '900',
      name: 'James',
    });
  });
});
