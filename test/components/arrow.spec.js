import React from 'react';
import renderer from 'react-test-renderer';
import Arrow from '../../src/components/arrow/Arrow';

describe('Arrow', () => {
  it('Arrow renders correctly', () => {
    const tree = renderer
      .create(<Arrow />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
