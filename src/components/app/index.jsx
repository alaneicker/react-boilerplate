import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <Route path="/" exact component={Splash} />
    </Provider>
  );
};

export default App;
