import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox.css';

const CheckBox = ({
  onExpand, onContract, isCollapsed,
}) => (
  <input
    id="styledCheckbox"
    className={styles.styledCheckbox}
    type="checkbox"
    checked={isCollapsed}
    onChange={!isCollapsed ? onExpand : onContract}
  />
);

CheckBox.propTypes = {
  onExpand: PropTypes.func.isRequired,
  onContract: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default CheckBox;
