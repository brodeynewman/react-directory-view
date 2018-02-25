import React, { Fragment } from 'react';
import Tree from './components/Tree';
import { machOne } from './mocks';

const treeMapping = {
  recursiveKey: 'children',
  childToRender: 'path',
  onExpand: treeProps => console.log('hello', treeProps),
};

const App = () => (
  <Fragment>
    <Tree
      treeData={machOne}
      treeMap={treeMapping}
    />
  </Fragment>
);

export default App;
