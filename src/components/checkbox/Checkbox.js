import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox.css';

const CheckBox = ({
  onExpand, onContract, isCollapsed, arrowStyles,
}) => (
  <input
    id="styledCheckbox"
    className={styles.styledCheckbox}
    type="checkbox"
    checked={isCollapsed}
    onChange={!isCollapsed ? onExpand : onContract}
  />
);

export default CheckBox;
