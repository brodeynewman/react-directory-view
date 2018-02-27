import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

const arrowStyling = {
  width: 0,
  height: 0,
  border: '4px solid transparent',
  borderTop: '4px solid',
  borderRight: '4px solid',
  margin: 15,
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',
  color: '#666',
  boxSizing: 'border-box',
  cursor: 'pointer',
};

const Arrow = ({
  onExpand, onContract, isCollapsed, arrowStyles = arrowStyling,
}) => (
  <i
    onClick={!isCollapsed ? onExpand : onContract}
    style={{
      ...arrowStyles,
      transform: `rotate(${isCollapsed ? '135deg' : '45deg'})`,
    }}
  />
);

Arrow.propTypes = {
  arrowStyles: PropTypes.objectOf('string'),
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

