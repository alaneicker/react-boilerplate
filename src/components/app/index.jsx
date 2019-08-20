import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from '../splash';
import '../../assets/styles/app.scss';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Splash} />
    </Router>
  );
};

export default App;