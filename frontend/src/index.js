import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
const muiTheme = getMuiTheme({
  palette: {
    primary1Color:'#c34433',
  },
});
const Page = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);
ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
