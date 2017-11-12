import React, { Component } from 'react';
import Notifications from '../Notifications';
import NewBeneficiaryForm from './NewBeneficiaryForm';

class NewBeneficiary extends Component {
  // add constructor
  render() {
    return (
      <div className="NewBeneficiary">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Beneficiary"/>
        <NewBeneficiaryForm handleSnackBar={this.props.handleSnackBar} />
      </div>
    );
  }
}

export default NewBeneficiary;
