import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './example.css';

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {}; // can be whatever..
  }

  render() {
    const { TogglingComponent, child, moveLeft } = this.props;

    return (
      <div className={styles.exampleComponent}>
        <span style={{ marginLeft: moveLeft }}>
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
  TogglingComponent: PropTypes.func.isRequired,
  child: PropTypes.string.isRequired,
  moveLeft: PropTypes.number.isRequired,
};

export default Example;
