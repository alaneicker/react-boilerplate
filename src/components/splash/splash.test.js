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
});
