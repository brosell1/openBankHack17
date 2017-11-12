import React, { Component } from 'react';
import LoginForm from './LoginForm'
import LoginButton from './LogInButton'
import Paper from 'material-ui/Paper';


const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    padding: '35vh',
    backgroundColor: '#c34433'
  },
  hint: {
    backgroundColor: '#ffffff',
    color: '#fff'
  },
  paperStyle: {
    height: 100,
    width: 290,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  }
};

const logo = "./logo-black.png";

class Login extends Component {
  render() {
    return (
      <div className="Login" style={styles.root}>
          <img src={logo} alt="railsbank logo"/>
          <Paper style={styles.paperStyle} zDepth={2}>
          <LoginForm style={styles.hint} onChange={this.props.onChange}/>
        </Paper>
          <LoginButton onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default Login;
