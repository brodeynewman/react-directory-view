import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TreeNode from './TreeNode';

/**
 * Recursively maps over a tree, and renders tree nodes
 * @param {Object} props - component props
 * @param {Object} tree - current tree node
 */
const mapChildrenRecursively = (props, tree, marginLeft = 15) => {
  if (tree.length) {
    return _.map(tree, (child, index) => {
      console.log(child);

      return (
        <TreeNode
          key={_.uniqueId(`${index}`)}
          child={_.get(child, `${_.get(props, 'treeMap.childToRender', '')}`)}
          marginLeft={marginLeft}
          isDeepestChild={!_.get(child, `${_.get(props, 'treeMap.recursiveKey', 'children')}.length`)}
          onExpand={_.get(props, 'treeMap.onExpand', _.noop)}
          onContract={_.get(props, 'treeMap.onContract', _.noop)}
          {...child}
        >
          {
            mapChildrenRecursively(
              props,
              _.get(child, `${_.get(props, 'treeMap.recursiveKey', 'children')}`, []),
              marginLeft + 5,
            )
          }
        </TreeNode>
      );
    });
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
