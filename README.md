# Easy to use directory tree component made for React

## How to use

Import the ```Tree``` Component, and specify a ```treeMap``` and ```treeData``` props.

```javascript
  const App = () => (
    <Tree
      treeData={treeData}
      treeMap={treeMapping}
    />
  );
```

The ```treeMap``` prop is just an object containing the configuration for your tree. An example below:

```javascript
  const treeMapping = {
    /**
     * recursiveKey is the key on your object tree which
     * the tree structure recursively maps over. By
     * default it looks for 'children'.
     */
    recursiveKey: 'dependents',
    /**
     * If a component isn't given to treeMapping, then
     * the 'childToRender' is rendered for each node in the tree.
     * This relates to the treeData you're passing to the Tree component.
     */
    childToRender: 'path',
    /**
     * Callback to execute whenever a tree node is EXPANDED.
     * This callback receieves all of the tree node's props.
     */
    onExpand: treeProps => console.log('Expanding..', treeProps),
    /**
     * Callback to execute whenever a tree node is CONTRACTEd.
     * This callback receieves all of the tree node's props.
     */
    onContract: treeProps => console.log('Contracting..', treeProps),
    /**
     * The component to render inside of every node. For example.. 
     * if you wanted to render an <li /> for each node to build a table.
     * This component will receieve all of the tree node's props. 
     */
    Component: ExampleComponent,
  };
```

A basic example could like like below: 

```javascript
import React, { Fragment } from 'react';
import Tree from './components/Tree';
import ExampleComponent from './components/ExampleComponent';

const treeMapping = {
  recursiveKey: 'children', // recursiveKey is set to 'children' by default
  childToRender: 'path',
  onExpand: treeProps => console.log('Expanding..', treeProps),
  onContract: treeProps => console.log('Contracting..', treeProps),
  Component: ExampleComponent,
};

const treeData = [
  {
    path: 'This',
    children: [
      {
        path: 'Is',
        children: [
          {
            path: 'Five',
            children: [
              {
                path: 'Levels',
                children: [
                  {
                    path: 'Deep',
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

const App = () => (
  <Fragment>
    <Tree
      treeData={treeData}
      treeMap={treeMapping}
    />
  </Fragment>
);
```

This will render a tree that looks like:

  ```bash

  This
    Is
      Five
        Levels
          Deep
  ```