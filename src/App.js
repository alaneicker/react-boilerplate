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
            <li><Link to>Link</Link></li>
            <li><Link to>Link</Link></li>
            <li><Link to>Link</Link></li>
            <li><Link to>Link</Link></li>
          </ul>
        </header>
        <div className="page__bd">
          <div className="content">
            <Route path="/" exact component={Home} />
          </div>
        </div>
        <div className="page__ft">
          <div className="content">
            Footer content...
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;