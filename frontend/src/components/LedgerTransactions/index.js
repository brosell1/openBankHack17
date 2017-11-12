import React, { Component } from 'react';
import Notifications from '../Notifications';
import TransactionListBox from './TransactionListBox';

class LedgerTransactions extends Component {
  render() {
    return (
      <div className="LedgerTransactions">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.handleLogoutClick} pageTitle="New Beneficiary"/>
        <TransactionListBox />
        <button onClick={() => this.props.onClick('newBulkTransaction')}>New Bulk Transaction</button>
        <button onClick={() => this.props.onClick('newTransaction')}>New Single Transaction</button>
      </div>
    );
  }
}

export default LedgerTransactions;
