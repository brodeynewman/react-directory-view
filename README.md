# React Directory View

You no longer need to write your recursion yourself. 
Just import the ```Tree``` component and supply ```treeData``` and ```treeMap``` props.

## How to use

Import the ```Tree``` Component, and specify ```treeMap``` and ```treeData``` props.

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
    * {string=}
    * recursiveKey is the key on your object tree which
    * the tree structure recursively maps over. By
    * default it looks for 'children'.
    */
  recursiveKey: 'children',
  /**
    * {string}
    * The React key given to each JSX node for dom comparison.
    */
  nodeKey: 'id',
  /**
    * {string=}
    * If a component isn't given to treeMapping, then
    * the 'childToRender' is rendered for each node in the tree.
    * This relates to the treeData you're passing to the Tree component.
    */
  childToRender: 'path',
};
```

A basic example could like below: 

```javascript
import React, { Fragment } from 'react';
import Tree from './components/Tree';
import ExampleComponent from './components/ExampleComponent';

const treeMapping = {
  recursiveKey: 'children', // recursiveKey is set to 'children' by default
  nodeKey: 'id',
  childToRender: 'path',
};

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
  > This
    > Is
      > A
        > Few
          Deep
  ```

## Props

|  Prop  | Default |  required  | Description |
:--------|:--------:|:----------:|:------------
treeData | Empty array | Yes | The data to recursively map over
treeMap  | Empty object | Yes | Describes the nodes / keys to use when mapping over each child array
useCheckbox | False | No | Wether to use checkboxes or not
checkboxStyles | Empty object | No | Style object used to add or override checkbox styles
arrowStyles | empty object | No | Style object used to add or override arrow styles
Component | None | No | A component to render for each node in the object tree. Receives all props from the treeNode.
paddingLeft | 15px | No | The amount of padding to add for each child
onContract | noOp | No | Callback to be invoked every time a child node is collapsed
onExpand | noOp | No | Callback to be invoked every time a child node is expanded
