import React from 'react';
import PropTypes from 'prop-types';

const DefaultComponent = ({ child, TogglingComponent, moveLeft }) => (
  <div>
    <span style={{ paddingLeft: moveLeft }}>
      {
        TogglingComponent
      }
    </span>
    {child}
  </div>
);

export default DefaultComponent;
