import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './assets/styles/app.scss';
import Home from './components/home/';

const App = () => {
  return (
    <Router>
      <div className="page">
        <header className="page__hd">
          <Link className="header-logo">Logo</Link>
          <ul className="header-nav">
            <li><Link to>Home</Link></li>
            <li><Link to>About</Link></li>
            <li><Link to>Services</Link></li>
            <li><Link to>Contact Us</Link></li>
          </ul>
        </header>
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