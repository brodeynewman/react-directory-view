import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './arrow.css';

const Arrow = ({
  onExpand, onContract, isCollapsed, arrowStyles,
}) => (
  <span
    className={styles.arrow}
    role="presentation"
    onClick={!isCollapsed ? onExpand : onContract}
    style={{
      ...arrowStyles,
      transform: `rotate(${isCollapsed ? '135deg' : '45deg'})`,
    }}
  />
);

Arrow.propTypes = {
  arrowStyles: PropTypes.objectOf(PropTypes.any),
  isCollapsed: PropTypes.bool,
  onExpand: PropTypes.func,
  onContract: PropTypes.func,
};

Arrow.defaultProps = {
  arrowStyles: {},
  isCollapsed: false,
  onExpand: _.noop,
  onContract: _.noop,
};

export default Arrow;

