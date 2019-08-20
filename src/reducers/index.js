import { createStore, combineReducers } from 'redux'; 

import splashReducer from './splash.reducer';

const store = createStore(combineReducers({
  splashReducer,
}));

export default store;