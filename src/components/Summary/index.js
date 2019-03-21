import React from 'react';
import PropTypes from 'prop-types';
import Classes from './Summary.module.scss';

const Summary = (props) => {
  const { accountInfo, balance } = props;
  return (
    <div>
      <ul className={Classes.info}>
        <li>
          <h2 className={Classes.accountName}>{`${accountInfo.title} - ${accountInfo.description}`}</h2>
        </li>
        <li>
          <strong>Account No. </strong>
          {accountInfo.account_number}
        </li>
        <li>
          <strong>Sort Code</strong>
          {accountInfo.sort_code}
        </li>
        <li>
          <strong>Current Balance: </strong>
          {`£${balance.amount}`}
        </li>
      </ul>
    </div>
  );
};

Summary.defaultProps = {
  accountInfo: {},
  balance: {},
};

Summary.propTypes = {
  accountInfo: PropTypes.objectOf(PropTypes.any),
  balance: PropTypes.objectOf(PropTypes.any),
};

export default Summary;
