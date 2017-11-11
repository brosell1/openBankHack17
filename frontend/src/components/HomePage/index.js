import React, { Component } from 'react';
import Notifications from '../Notifications'

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Notifications pageTitle="Home"/>
      </div>
    );
  }
}

export default HomePage;
