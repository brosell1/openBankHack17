import React, { Component } from 'react';
import Notifications from '../Notifications'
import AccountsBox from './AccountsBox';
import ButtonBar from './ButtonBar';


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="Home"/>
        <AccountsBox />
        <ButtonBar isAdmin={this.props.isAdmin} onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default HomePage;
