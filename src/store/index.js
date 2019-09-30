import { createStore, combineReducers } from 'redux';

import splashReducer from '../components/splash/splash.reducer';

const store = createStore(combineReducers({
  splashReducer,
}));

export default store;