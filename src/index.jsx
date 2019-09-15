import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './assets/styles/app.scss';

ReactDOM.hydrate(<App />, document.getElementById('root'));
