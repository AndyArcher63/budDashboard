import React, { Component, Fragment } from 'react';
import Summary from '../../components/Summary';
import Transactions from '../../components/Transactions';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import getAccountRequest from '../../api/requests';

class Dashboard extends Component {
  state = {
    accountDetails: {},
    error: false,
  }

  componentDidMount() {
    this.getAccount();
  }

  async getAccount() {
    try {
      const results = await getAccountRequest();

      this.setState({
        accountDetails: results.data,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const { accountDetails, error } = this.state;
    if (error) {
      return (
        <Error />
      );
    }
    return (
      <Fragment>
        {
          Object.keys(accountDetails).length > 0 ? (
            <Fragment>
              <Summary accountInfo={accountDetails.provider} balance={accountDetails.balance} />
              <Transactions transactions={accountDetails.transactions} />
            </Fragment>
          ) : (
            <Loader />
          )
        }
      </Fragment>
    );
  }
}

export default Dashboard;
