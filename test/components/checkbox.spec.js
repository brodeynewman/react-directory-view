import React from 'react';
import renderer from 'react-test-renderer';
import CheckBox from '../../src/components/checkbox/Checkbox';

describe('CheckBox', () => {
  it('CheckBox renders correctly', () => {
    const tree = renderer
      .create(<CheckBox />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
