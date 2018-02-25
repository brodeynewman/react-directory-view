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
    this.props.onExpand(this.props);

    return this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed }));
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
              onClick={this.handleClick}
            />)
          }
          {
            !isDeepestChild
            ? child || null
            : <span style={{ marginLeft: marginLeft - 5 }} >{child || null}</span>
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
