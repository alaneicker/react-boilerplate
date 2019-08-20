import React from 'react';
import { shallow } from 'enzyme';

import Splash from '.';

describe('Splash', () => {
  it('Should render without errors', () => {
    const component = shallow(<Splash />);
    expect(component).toHaveLength(1);
  });
});