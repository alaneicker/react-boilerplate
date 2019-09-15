import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Splash from '../splash';

import splashReducer from '../splash/splash.reducer';

const store = createStore(combineReducers({
  splashReducer,
}));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Splash} />
      </Router>
    </Provider>
  );
};

export default App;
