import React, { Component } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Transactions from './components/Transactions';
import getAccountRequest from './api/requests';
import './App.css';

class App extends Component {
  state = {
    accountDetails: {},
  }

  componentDidMount() {
    this.getAccount();
  }

  async getAccount() {
    const results = await getAccountRequest();

    this.setState({
      accountDetails: results.data,
    });
  }

  render() {
    const { accountDetails } = this.state;
    return (
      <div className="App">
        <Header />
        <Summary accountInfo={accountDetails.provider} balance={accountDetails.balance} />
        <Transactions transactions={accountDetails.transactions} />
      </div>
    );
  }
}

export default App;
