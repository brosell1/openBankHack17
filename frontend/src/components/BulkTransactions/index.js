import React, { Component } from 'react';
import Notifications from '../Notifications'

class BulkTransactions extends Component {
  render() {
    return (
      <div className="BulkTransactions">
        <Notifications pageTitle="Bulk Transactions"/>
      </div>
    );
  }
}

export default BulkTransactions;
