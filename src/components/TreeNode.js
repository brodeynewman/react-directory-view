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
    const {
      marginLeft, isDeepestChild, children, ComponentToRender,
    } = this.props;

    return (
      <Fragment>
        <div>
          {
            !isDeepestChild && (<Arrow
              isCollapsed={isCollapsed}
              onExpand={this.handleExpand}
              onContract={this.handleContract}
            />)
          }
          {
            !isDeepestChild
            ? <ComponentToRender {...this.props} />
            : (
              <span style={{ marginLeft: marginLeft - 5 }}>
                <ComponentToRender {...this.props} />
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
  marginLeft: PropTypes.number,
  isDeepestChild: PropTypes.bool,
  child: PropTypes.oneOfType(['object']),
  children: PropTypes.arrayOf(['object']),
  ComponentToRender: PropTypes.element,
  onExpand: PropTypes.func,
  onContract: PropTypes.func,
};

TreeNode.defaultProps = {
  marginLeft: 0,
  isDeepestChild: false,
  child: '',
  children: [],
  ComponentToRender: null,
  onExpand: _.noop,
  onContract: _.noop,
};

export default TreeNode;
