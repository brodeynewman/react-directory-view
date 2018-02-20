import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { machOne } from '../mocks';

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { directoryClassNames } = this.props;

    console.log(machOne);

    return (
      <div className={directoryClassNames}>
        {this.props.children}
      </div>
    );
  }
}

Directory.propTypes = {
  directoryClassNames: PropTypes.string,
};

Directory.defaultProps = {
  directoryClassNames: '',
};

export default Directory;
