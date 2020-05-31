import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { StoreProvider } from './Store';
import './index.css';

import HomePage from './HomePage';
import { Router } from '@reach/router';
import FavPage from './FavePage';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App path="/">
          <HomePage path="/" />
          <FavPage path="/faves" />
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
