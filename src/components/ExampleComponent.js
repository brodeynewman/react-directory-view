import React, { Component } from 'react';

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('Are these my props?', this.props);

    return (
      <span>
        {
          this.props.child
        }
      </span>
    );
  }
}

export default Example;
