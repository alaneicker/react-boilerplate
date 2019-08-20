import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from './reducers';

import App from './App';

describe('App', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component).toHaveLength(1);
  });
});