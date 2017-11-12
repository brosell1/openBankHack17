import React, { Component } from 'react';
import Notifications from '../Notifications';
import NewBeneficiaryForm from './NewBeneficiaryForm';
import CreateButton from './CreateButton';

class NewBeneficiary extends Component {
  // add constructor
  render() {
    return (
      <div className="NewBeneficiary">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Beneficiary"/>
        <NewBeneficiaryForm />
        <CreateButton onClick={this.onClick}/>
      </div>
    );
  }
}

export default NewBeneficiary;
