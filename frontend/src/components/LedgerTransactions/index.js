import React, { Component } from 'react';
import Notifications from '../Notifications'

class LedgerTransactions extends Component {
  render() {
    return (
      <div className="LedgerTransactions">
        <Notifications pageTitle="Transactions"/>
      </div>
    );
  }
}

export default LedgerTransactions;
