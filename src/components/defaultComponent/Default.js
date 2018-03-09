import React from 'react';
import PropTypes from 'prop-types';

const DefaultComponent = ({ child, TogglingComponent, paddingLeft }) => (
  <div>
    <span style={{ paddingLeft }}>
      {
        TogglingComponent
      }
    </span>
    {child}
  </div>
);

DefaultComponent.propTypes = {
  child: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  TogglingComponent: PropTypes.oneOfType([
    PropTypes.func, PropTypes.object,
  ]),
  paddingLeft: PropTypes.number.isRequired,
};

DefaultComponent.defaultProps = {
  TogglingComponent: null,
};

export default DefaultComponent;
