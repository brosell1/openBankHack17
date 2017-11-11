import React, { Component } from 'react';

// import NotificationItem from './NotificationItem'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs'
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render(props) {
    // const logo = <img src="../../../public/logo-black.png" />
    return (
      <div className="Notifications">
        <AppBar
          title={<span style={styles.title}>{this.props.pageTitle}</span>}
          onTitleTouchTap={this.props.handleReturn}
          onLeftIconButtonTouchTap={() => this.handleToggle()}
          iconElementRight={<FlatButton label="Logout" onClick={this.props.handleLogoutClick}/>}
        />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
            <h1> Notifications </h1>
          <Tabs>
            <Tab label="Approved">
              {/* {this.props.approvedNotifications.map((item, ind) => {
                <NotificationItem data={item}/>
              })} */}
              <MenuItem onClick={this.handleClose}>Menu Item 1</MenuItem>
            </Tab>
            <Tab label="Pending">
              {/* {this.props.pendingNotifications.map((item, ind) => {
                <NotificationItem data={item}/>
              })} */}
              <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
            </Tab>
          </Tabs>
        </Drawer>
      </div>
    );
  }
}

export default Notifications;
