import React, { Fragment } from 'react';
import { machOne } from './mocks';
import Tree from './components/Tree';
import ExampleComponent from './components/exampleComponent/ExampleComponent';

const treeMapping = {
  useCheckbox: true,
  childToRender: 'path',
  recursiveKey: 'children',
  Component: ExampleComponent,
  textPadding: 30,
  onExpand: treeProps => console.log('Expanding..', treeProps),
  onContract: treeProps => console.log('Contracting..', treeProps),
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
