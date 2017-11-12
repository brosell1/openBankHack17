import React, { Component } from 'react';
import Notifications from '../Notifications'

class NewBeneficiary extends Component {
  render() {
    return (
      <div className="NewBeneficiary">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Beneficiary"/>
      </div>
    );
  }
}

export default NewBeneficiary;
