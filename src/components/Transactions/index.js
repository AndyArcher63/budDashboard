import React from 'react';
import PropTypes from 'prop-types';
import Transaction from '../Transaction';
import { getList } from '../../utility';
import Classes from './Transactions.module.scss';

const Transactions = (props) => {
  const { transactions } = props;

  const formattedTransactions = getList(transactions);

  const transactionsList = formattedTransactions.map(item => (
    <Transaction key={item.id} transaction={item} />
  ));
  return (
    <ul className={Classes.transactions}>
      {transactionsList}
    </ul>
  );
};

Transactions.defaultProps = {
  transactions: [],
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default Transactions;
