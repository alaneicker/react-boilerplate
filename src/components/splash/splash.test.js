import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Splash } from '.';

describe('Splash', () => {

  let component;

  beforeEach(() => {
    component = shallow(
      <Splash
        splashTitle="Splash Page Title"
        splashSubtitle="Splash Page Subtitle"
      />
    );
  });

  it('Should render without errors', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render with correct title and subtitle', () => {
    expect(component.find('h1').text()).toBe('Splash Page Title');
    expect(component.find('h2').text()).toBe('Splash Page Subtitle');
  });
});