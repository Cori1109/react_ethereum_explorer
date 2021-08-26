import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import Web3Provider from 'react-web3-provider';
import theme from './theme';
import Routes from './Routes';
import Web3Service from './services/Web3service';

const browserHistory = createBrowserHistory();

export default class App extends Component {

  render() {

    return (
      <Web3Provider
        defaultProvider={(cb) => cb(Web3Service.getWeb3Provider())}
        loading="Loading..."
        error={(err) => `Connection error: ${err.message}`}
      >
        <ThemeProvider theme={theme()}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </Web3Provider>
    );
  }
}