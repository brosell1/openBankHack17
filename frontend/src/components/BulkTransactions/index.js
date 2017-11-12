import React, { Component } from 'react';
import Notifications from '../Notifications'

class BulkTransactions extends Component {
  render() {
    return (
      <div className="BulkTransactions">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="Bulk Transactions"/>
      </div>
    );
  }
}

export default BulkTransactions;
