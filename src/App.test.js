import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('Should render without errors', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});