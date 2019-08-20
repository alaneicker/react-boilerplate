import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../../reducers';

import Splash from '.';

describe('Splash', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Provider store={store}>
        <Splash />
      </Provider>
    );
    expect(component).toHaveLength(1);
  });
});