import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './assets/styles/app.scss';
import Splash from './components/splash/';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Splash} />
    </Router>
  );
};

export default App;