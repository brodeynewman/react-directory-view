import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './example.css';

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {}; // can be whatever..
  }

  render() {
    const { TogglingComponent, child, paddingLeft } = this.props;

    return (
      <div className={styles.exampleComponent}>
        <span style={{ paddingLeft }}>
          {
            TogglingComponent
          }
        </span>
        {
          child
        }
      </div>
    );
  }
}

Example.propTypes = {
  TogglingComponent: PropTypes.oneOfType([
    PropTypes.func, PropTypes.object,
  ]),
  child: PropTypes.string.isRequired,
  paddingLeft: PropTypes.number.isRequired,
};

Example.defaultProps = {
  TogglingComponent: null,
};

export default Example;
