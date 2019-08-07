import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import History from './services/history'

import store from './store'

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
    <Router history={History}>
      <Routes />
      <GlobalStyle />
    </Router>
    </Provider>
  );
}

export default App;
