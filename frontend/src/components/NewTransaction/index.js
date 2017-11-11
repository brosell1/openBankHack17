import React, { Component } from 'react';
import Notifications from '../Notifications'

class NewTransaction extends Component {
  render() {
    return (
      <div className="NewTransaction">
        <Notifications pageTitle="New Transaction"/>
      </div>
    );
  }
}

export default NewTransaction;
