import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/styles/app.scss';
import Home from './components/home/';

const App = () => {
  return (
    <Router>
      <div className="page">
        <div className="page__hd">

        </div>
        <div className="page__bd">
          <div className="page__content">
            <Route path="/" exact component={Home} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;