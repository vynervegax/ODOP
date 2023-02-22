import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, ReactReduxContext} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './store';
import configureStore from './store';
import App from './components/App';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import './index.css';

const store = configureStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#773285',
      main: '#cfa321',
      dark: '#a87a5b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#773285',
      main: '#cfa321',
      dark: '#a87a5b',
      contrastText: '#fff',
    },
    success: {
      light: '#773285',
      main: '#cfa321',
      dark: '#a87a5b',
    },
    info: {
      light: '#773285',
      main: '#cfa321',
      dark: '#a87a5b',
    },
    warning: {
      light: '#773285',
      main: '#cfa321',
      dark: '#a87a5b',
      contrastText: '#000',
    },
    error: {
      light: '#773285',
      main: '#cfa321',
      dark: '#a87a5b',
    },
  },

  background: '#FFF',

  typography: {
    fontFamily: 'Nunito, sans-serif',
    button: {
      fontWeight: '600',
      fontSize: '16px',
    },
    body1: {
      fontFamily: 'Lato, san-serif',
      fontSize: '16px',
      fontWeight: '400',
    },
    body2: {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '16px',
      fontWeight: '400',
    },
    h1: {
      fontSize: '36px',
      fontWeight: '600',
    },
    h2: {
      fontSize: '30px',
      fontWeight: '600',
    },
    h3: {
      fontSize: '24px',
      fontWeight: '400',
    },
    h4: {
      fontSize: '20px',
      fontWeight: '400',
    },
    h5: {
      fontSize: '18px',
      fontWeight: '400',
    },
    h6: {
      fontSize: '16px',
      fontWeight: '400',
    },
  },
});

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
