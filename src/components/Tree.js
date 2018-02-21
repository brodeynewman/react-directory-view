import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TreeNode from './TreeNode';

const mapChildNodes = (children) => {
  console.log('here', children);

  return 'hi';
};

/**
 * Recursively maps over a tree, and renders tree nodes
 * @param {Object} props - component props
 * @param {Object} tree - current tree node
 */
const mapChildrenRecursively = (props, tree) => {
  const keys = _.keys(tree);

  if (keys.length) {
    return _.map(keys, (child, index) => (
      <TreeNode
        key={_.uniqueId(`${child}_${index}`)}
        child={child}
      >
        {
          mapChildrenRecursively(props, tree[child])
        }
      </TreeNode>
    ));
  }

  return null;
};

/**
 * Factory function used for partialing
 * @param {Object} props - component props
 */
const treeFactory = props => ({
  mapChildrenRecursively: _.partial(mapChildrenRecursively, props),
});

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { treeData } = this.props;

    const factoryWithProps = treeFactory(this.props);

    return (
      <div>
        {
          treeData ?
          factoryWithProps.mapChildrenRecursively(treeData)
          : null
        }
      </div>
    );
  }
}

Tree.propTypes = {
};

Tree.defaultProps = {
};

export default Tree;
