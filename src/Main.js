import React, { Fragment } from 'react';
import Tree from './components/Tree';
import { machOne } from './mocks';

const App = () => (
  <Fragment>
    <Tree
      treeData={machOne}
    />
  </Fragment>
);

export default App;
