import React, { Fragment } from 'react';
import { machOne } from './mocks';
import Tree from './components/Tree';
import ExampleComponent from './components/ExampleComponent';

const treeMapping = {
  recursiveKey: 'children',
  childToRender: 'path',
  onExpand: treeProps => console.log('Expanding..', treeProps),
  onContract: treeProps => console.log('Contracting..', treeProps),
  Component: ExampleComponent,
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
