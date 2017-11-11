import React, { Component } from 'react';
import Notifications from '../Notifications'

class LedgerTransactions extends Component {
  render() {
    return (
      <div className="LedgerTransactions">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.handleLogoutClick} pageTitle="Transactions"/>
      </div>
    );
  }
}

export default LedgerTransactions;
