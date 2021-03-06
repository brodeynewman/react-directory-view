import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import TreeNode from './TreeNode';
import DefaultComponent from './defaultComponent/Default';

/**
 * Recursively maps over a tree, and renders tree nodes
 * @param {Object} props - component props
 * @param {Object} tree - current tree node
 */
export const mapChildrenRecursively = (props, tree, paddingLeft = 0) => {
  if (tree.length) {
    return _.map(tree, child => (
      <TreeNode
        key={_.get(child, `${_.get(props, 'treeMap.nodeKey', '')}`)}
        child={_.get(child, `${_.get(props, 'treeMap.childToRender', '')}`)}
        paddingLeft={paddingLeft}
        isDeepestChild={!_.get(child, `${_.get(props, 'treeMap.recursiveKey', 'children')}.length`)}
        onExpand={_.get(props, 'onExpand', _.noop)}
        onContract={_.get(props, 'onContract', _.noop)}
        ComponentToRender={_.get(props, 'Component', DefaultComponent)}
        useCheckbox={_.get(props, 'useCheckbox', false)}
        checkboxStyles={_.get(props, 'checkboxStyles', {})}
        arrowStyles={_.get(props, 'arrowStyles', {})}
        {...child}
      >
        {
            mapChildrenRecursively(
              props,
              _.get(child, `${_.get(props, 'treeMap.recursiveKey', 'children')}`, []),
              paddingLeft + (_.get(props, 'paddingLeft', 15)),
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

const Tree = (props) => {
  const { treeData } = props;

  const factoryWithProps = treeFactory(props);

  return (
    <div>
      {
        treeData ?
        factoryWithProps.mapChildrenRecursively(treeData)
        : null
      }
    </div>
  );
};

Tree.propTypes = {
  treeData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tree;
