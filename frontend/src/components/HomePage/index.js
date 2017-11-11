import React, { Component } from 'react';
import Notifications from '../Notifications'

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.handleLogoutClick} pageTitle="Home"/>
      </div>
    );
  }
}

export default HomePage;
