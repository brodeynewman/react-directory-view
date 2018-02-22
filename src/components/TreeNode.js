import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment, Component } from 'react';
import Arrow from './arrow';

class TreeNode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.isCollapsed);
    return this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
  }

  render() {
    const { isCollapsed } = this.state;
    const { collapseAll } = this.context;
    const { marginLeft } = this.props;

    return (
      <Fragment>
        <div>
          <Arrow isCollapsed={isCollapsed || collapseAll} onClick={this.handleClick} />
          {
            this.props.child || null
          }
        </div>
        {
          this.props.children && (
            <div
              style={{
                display: isCollapsed || collapseAll ? 'inline-block' : 'none',
                marginLeft,
              }}
            >
              {this.props.children}
            </div>
          )
        }
      </Fragment>
    );
  }
}

TreeNode.contextTypes = {
  collapseAll: PropTypes.bool,
};

TreeNode.propTypes = {
};

TreeNode.defaultProps = {
};

export default TreeNode;
