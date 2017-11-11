import React, { Component } from 'react';
import AccountsBox from './AccountsBox';
import ButtonBar from './ButtonBar';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <AccountsBox />
        <ButtonBar />
      </div>
    );
  }
}

export default HomePage;
