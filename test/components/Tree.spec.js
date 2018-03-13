import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Tree from '../../src/components/Tree';

const treeData = [
  {
    path: 'this',
    id: 1,
    children: [
      {
        path: 'is',
        id: 2,
        children: [
          {
            path: 'a',
            id: 3,
            children: [
              {
                path: 'few',
                id: 4,
                children: [
                  {
                    path: 'deep',
                    id: 5,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

describe('Tree', () => {
  it('Tree renders correctly', () => {
    const tree = renderer
      .create(<Tree treeData={treeData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tree renders a div if treeData is non-existent', () => {
    const tree = renderer
      .create(<Tree />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
