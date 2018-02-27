import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({
  onExpand, onContract, isCollapsed, arrowStyles,
}) => (
  <input
    type="checkbox"
    checked={isCollapsed}
    onChange={!isCollapsed ? onExpand : onContract}
  />
);

export default CheckBox;
