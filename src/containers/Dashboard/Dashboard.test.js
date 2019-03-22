import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '.';
import getAccountRequest from '../../api/requests';
import Loader from '../../components/Loader';
import Transactions from '../../components/Transactions';
import Error from '../../components/Error';
import Mock from './__mocks__/Mock';

jest.mock('../../api/requests');

describe('<Dashboard />', () => {
  let wrapper;
  beforeEach(() => {
    getAccountRequest.mockImplementation(() => (Promise.resolve({ data: Mock })));
    wrapper = shallow(<Dashboard />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render <Loader /> when state.accountDetails is empty', () => {
    wrapper.setState({
      error: false,
      accountDetails: {},
    });
    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it('should render <Transactions /> when state.accountDetails is not empty', () => {
    expect(wrapper.find(Transactions)).toHaveLength(1);
  });

  it('should render <Error /> when state.error is true', () => {
    wrapper.setState({
      error: true,
    });
    expect(wrapper.find(Error)).toHaveLength(1);
  });

  it('should set state.error to true if ajax request fails', async () => {
    getAccountRequest.mockImplementation(() => (Promise.reject()));
    await wrapper.instance().getAccount();
    expect(wrapper.state().error).toEqual(true);
  });
});
