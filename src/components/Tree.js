import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TreeNode from './TreeNode';
import DefaultComponent from './defaultComponent/Default';

/**
 * Recursively maps over a tree, and renders tree nodes
 * @param {Object} props - component props
 * @param {Object} tree - current tree node
 */
const mapChildrenRecursively = (props, tree, moveLeft = 0) => {
  if (tree.length) {
    return _.map(tree, (child, index) => (
      <TreeNode
        key={_.uniqueId(`${index}`)}
        child={_.get(child, `${_.get(props, 'treeMap.childToRender', '')}`)}
        moveLeft={moveLeft}
        isDeepestChild={!_.get(child, `${_.get(props, 'treeMap.recursiveKey', 'children')}.length`)}
        onExpand={_.get(props, 'treeMap.onExpand', _.noop)}
        onContract={_.get(props, 'treeMap.onContract', _.noop)}
        ComponentToRender={_.get(props, 'treeMap.Component', DefaultComponent)}
        useCheckbox={_.get(props, 'treeMap.useCheckbox', true)}
        {...child}
      >
        {
            mapChildrenRecursively(
              props,
              _.get(child, `${_.get(props, 'treeMap.recursiveKey', 'children')}`, []),
              moveLeft + 15,
            )
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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ collapseAll: !prevState.collapseAll }));
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
  treeData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tree;
