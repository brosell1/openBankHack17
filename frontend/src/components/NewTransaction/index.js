import React, { Component } from 'react';

import Notifications from '../Notifications'
// import ButtonBar from './ButtonBar'
import NewTransactionForm from './NewTransactionForm'

class NewTransaction extends Component {
  render(props) {
    return (
      <div className="NewTransaction">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Transaction"/>
        <NewTransactionForm handleSnackBar={this.props.handleSnackBar} beneficiaries={this.props.beneficiaries} ledgers={this.props.ledgers} />
      </div>
    );
  }
}

export default NewTransaction;
