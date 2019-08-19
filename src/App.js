import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/styles/app.scss';
import Home from './components/home/';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </Fragment>
  );
};

export default App;