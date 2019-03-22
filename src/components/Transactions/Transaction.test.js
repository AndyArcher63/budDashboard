import React from 'react';
import { shallow } from 'enzyme';
import Transactions from '.';
import Transaction from '../Transaction';
import Mock from './__mocks__/Mock';

describe('<Transactions />', () => {
  let wrapper;

  it('should render the number of 2 <Transaction /> when a array of 2 items with only debits is passed', () => {
    wrapper = shallow(<Transactions transactions={Mock.debitOnly} />);
    expect(wrapper.find(Transaction)).toHaveLength(2);
  });

  it('should render the number of 3 <Transaction /> when a array of 4 items with only 3 debits', () => {
    wrapper = shallow(<Transactions transactions={Mock.mixed} />);
    expect(wrapper.find(Transaction)).toHaveLength(3);
  });
});
