import React, { Component } from 'react';
import Notifications from '../Notifications'

class BulkTransactions extends Component {
  // constructor
  render() {
    return (
      <div className="BulkTransactions">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="Bulk Transactions"/>
        <input type='file' multiple/>
        <textarea></textarea>
        <button>Approve</button>
      </div>
    );
  }
}

export default BulkTransactions;
