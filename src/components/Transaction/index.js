import React from 'react';
import PropTypes from 'prop-types';
import Classes from './Transaction.module.scss';

const Transaction = (props) => {
  const { transaction } = props;
  return (
    <li className={Classes.transactionItem}>
      <span className={Classes.date}>{transaction.date}</span>
      <span className={Classes.desc}>{transaction.description}</span>
      <span className={Classes.title}>{transaction.category_title}</span>
      <span className={Classes.value}>{`£${transaction.amount.value}`}</span>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Transaction;
