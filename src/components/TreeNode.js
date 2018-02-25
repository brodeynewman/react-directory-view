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

    this.handleExpand = this.handleExpand.bind(this);
    this.handleContract = this.handleContract.bind(this);
  }

  handleContract() {
    this.setState({ isCollapsed: false });

    return this.props.onContract(this.props);
  }

  handleExpand() {
    this.setState({ isCollapsed: true });

    return this.props.onExpand(this.props);
  }

  render() {
    const { isCollapsed } = this.state;
    const { collapseAll } = this.context;
    const {
      marginLeft, isDeepestChild, child, children,
    } = this.props;

    return (
      <Fragment>
        <div>
          {
            !isDeepestChild && (<Arrow
              isCollapsed={isCollapsed || collapseAll}
              onExpand={this.handleExpand}
              onContract={this.handleContract}
            />)
          }
          {
            !isDeepestChild
            ? child || null
            : <span style={{ marginLeft: marginLeft - 5 }}>{child || null}</span>
          }
        </div>
        {
          children && (
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
