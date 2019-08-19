import React from 'react';
import { shallow } from 'enzyme';

import Home from './';

describe('Home', () => {
  it('Should render without errors', () => {
    const component = shallow(<Home />);
    expect(component).toHaveLength(1);
  });
});