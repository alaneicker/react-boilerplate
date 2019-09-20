import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/app';

import './assets/styles/app.scss';

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
