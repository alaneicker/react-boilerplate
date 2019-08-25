import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';

import './assets/styles/app.scss';

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
