import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const TreeNode = (props) => {
  console.log('???');

  return (
    <Fragment>
      {
        props.child || null
      }
      {
        props.children || null
      }
    </Fragment>
  );
};

TreeNode.propTypes = {
};

TreeNode.defaultProps = {
};

export default TreeNode;
