import React from 'react';
import { Router } from 'react-router-dom';


import Routes from './routes';
import History from './services/history'

import CreateGlobalStyle from './styles/global';

function App() {
  return (
    <Router history={History}>
      <Routes />
      <CreateGlobalStyle />
    </Router>
  );
}

export default App;
