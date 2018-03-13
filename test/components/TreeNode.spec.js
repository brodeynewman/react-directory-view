import React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TreeNode from '../../src/components/TreeNode';

describe('TreeNode', () => {
  it('handleContract should update isCollapsed state and call props.onContract', () => {
    const wrapper = shallow(<TreeNode onContract={spy()}><div>Hello There</div></TreeNode>).instance();

    wrapper.handleExpand();

    expect(wrapper.state.isCollapsed).toBe(true);

    wrapper.handleContract();

    expect(wrapper.state.isCollapsed).toBe(false);
    expect(wrapper.props.onContract.called).toBe(true);
  });

  it('handleExpand should update isCollapsed state and call props.onExpand', () => {
    const wrapper = shallow(<TreeNode onExpand={spy()}><div>Hello There</div></TreeNode>).instance();

    wrapper.handleExpand();

    expect(wrapper.state.isCollapsed).toBe(true);
    expect(wrapper.props.onExpand.called).toBe(true);
  });
});
