import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import App from '.';

describe('App', () => {
  it('Should render correctly', () => {
    const component = shallow(<App />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});