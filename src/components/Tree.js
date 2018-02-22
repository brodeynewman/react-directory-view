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
const mapChildrenRecursively = (props, tree, marginLeft = 15) => {
  const keys = _.keys(tree);

  if (keys.length) {
    return _.map(keys, (child, index) => (
      <TreeNode
        key={_.uniqueId(`${child}_${index}`)}
        child={child}
        marginLeft={marginLeft}
      >
        {
          mapChildrenRecursively(props, tree[child], marginLeft + 5)
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

    this.state = {
      collapseAll: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getChildContext() {
    return { collapseAll: this.state.collapseAll };
  }

  handleClick() {
    this.setState(prevState => ({ collapseAll: !prevState.collapseAll }));
  }

  render() {
    const { treeData } = this.props;
    const { collapseAll } = this.state;

    const factoryWithProps = treeFactory(this.props);

    return (
      <div>
        <button onClick={this.handleClick}>{collapseAll ? 'Hide all' : 'Collapse all'}</button>
        {
          treeData ?
          factoryWithProps.mapChildrenRecursively(treeData)
          : null
        }
      </div>
    );
  }
}

Tree.childContextTypes = {
  collapseAll: PropTypes.bool,
};

Tree.propTypes = {
};

Tree.defaultProps = {
};

export default Tree;
