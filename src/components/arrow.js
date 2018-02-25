import React from 'react';

const Arrow = ({ onExpand, onContract, isCollapsed }) => (
  <i
    onClick={!isCollapsed ? onExpand : onContract}
    style={{
      width: 0,
      height: 0,
      border: '4px solid transparent',
      borderTop: '4px solid',
      borderRight: '4px solid',
      margin: 15,
      transform: `rotate(${isCollapsed ? '135deg' : '45deg'})`,
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'middle',
      color: '#666',
      boxSizing: 'border-box',
      cursor: 'pointer',
    }}
  />
);

export default Arrow;

