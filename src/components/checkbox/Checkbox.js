import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const CheckBox = ({
  onExpand, onContract, isCollapsed, checkboxStyles,
}) => (
  <input
    style={{
        ...styles,
        ...checkboxStyles,
       }}
    type="checkbox"
    checked={isCollapsed}
    onChange={!isCollapsed ? onExpand : onContract}
  />
);

CheckBox.propTypes = {
  onExpand: PropTypes.func.isRequired,
  onContract: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  checkboxStyles: PropTypes.objectOf(PropTypes.any),
};

CheckBox.defaultProps = {
  checkboxStyles: {},
};

export default CheckBox;
