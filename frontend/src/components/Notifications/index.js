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
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em", "background-color": "#cdf7cd"}}>Transaction #132 approved by Imran</span></MenuItem>
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em", "background-color": "#f7e1ed"}}>Transaction #128 rejected by Imran</span></MenuItem>
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em", "background-color": "#cdf7cd"}}>Transaction #122 approved by Elizabeth</span></MenuItem>
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em", "background-color": "#cdf7cd"}}>Transaction #114 approved by Imran</span></MenuItem>
            </Tab>
            <Tab label="Pending">
              {/* {this.props.pendingNotifications.map((item, ind) => {
                <NotificationItem data={item}/>
              })} */}
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em"}}>Transaction #143 pending</span></MenuItem>
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em"}}>Transaction #148 pending</span></MenuItem>
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em"}}>Transaction #151 pending</span></MenuItem>
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em"}}>Transaction #152 pending</span></MenuItem>
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em"}}>Transaction #156 pending</span></MenuItem>
              <MenuItem onClick={this.handleClose}><span style={{"font-size": "0.85em"}}>Transaction #158 pending</span></MenuItem>

            </Tab>
          </Tabs>
        </Drawer>
      </div>
    );
  }
}

export default Notifications;
