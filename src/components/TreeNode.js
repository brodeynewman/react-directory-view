import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment, Component } from 'react';
import Arrow from './Arrow';
import CheckBox from './Checkbox';

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
    const {
      marginLeft, isDeepestChild, children, ComponentToRender, useCheckbox,
    } = this.props;

    return (
      <Fragment>
        <div>
          {
            !isDeepestChild && (
              useCheckbox
              ? <CheckBox
                isCollapsed={isCollapsed}
                onExpand={this.handleExpand}
                onContract={this.handleContract}
              />
              : <Arrow
                isCollapsed={isCollapsed}
                onExpand={this.handleExpand}
                onContract={this.handleContract}
              />
            )
          }
          {
            !isDeepestChild
            ? <ComponentToRender {...this.props} isCollapsed={isCollapsed} />
            : (
              <span>
                <ComponentToRender {...this.props} isCollapsed={isCollapsed} />
              </span>
            )
          }
        </div>
        {
          children && (
            <div
              style={{
                display: isCollapsed ? 'inline-block' : 'none',
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

TreeNode.propTypes = {
  onExpand: PropTypes.func,
  onContract: PropTypes.func,
  useCheckbox: PropTypes.bool,
  marginLeft: PropTypes.number,
  isDeepestChild: PropTypes.bool,
  ComponentToRender: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.object),
  child: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

TreeNode.defaultProps = {
  child: '',
  children: [],
  marginLeft: 0,
  onExpand: _.noop,
  onContract: _.noop,
  useCheckbox: false,
  isDeepestChild: false,
  ComponentToRender: _.noop,
};

export default TreeNode;
