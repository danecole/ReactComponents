import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Menu } from 'react-aria-menubutton';
import classnames from 'classnames';
import Btn from '../Button';
import tracked from '../tracking/tracked';
import propTypes from '../../propTypes';
import DropdownToggle from './DropdownToggle';
import DropdownItem from './DropdownItem';
import DropdownSeparator from './DropdownSeparator';

export class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.onMenuToggle = this.onMenuToggle.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  onMenuToggle({ isOpen }) {
    this.setState({ isOpen });
  }

  onSelection(value) {
    this.props.onSelect(value);
  }

  render() {
    const { buttons, items, toggle, right, top } = this.props;
    const wrapperClasses = classnames({
      'btn-group': true,
      dropup: top,
      open: this.state.isOpen,
    });
    const menuClasses = classnames({
      'dropdown-menu': true,
      'dropdown-menu-right': right,
    });

    return (
      <Wrapper
        className={wrapperClasses}
        onSelection={this.onSelection}
        onMenuToggle={this.onMenuToggle}
      >
        {buttons}
        {toggle}
        <Menu tag="ul" className={menuClasses}>
          {items}
        </Menu>
      </Wrapper>
    );
  }
}

const Tracked = tracked(Component);

Tracked.Toggle = DropdownToggle;
Tracked.Item = DropdownItem;
Tracked.Separator = DropdownSeparator;

Component.propTypes = {
  onSelect: PropTypes.func.isRequired,
  right: PropTypes.bool,
  top: PropTypes.bool,
  buttons: PropTypes.arrayOf(propTypes.component([Btn])),
  toggle: propTypes.component([Tracked.Toggle]).isRequired,
  items: PropTypes.arrayOf(
    propTypes.component([Tracked.Item, Tracked.Separator])
  ).isRequired,
};

Component.defaultProps = {
  buttons: undefined,
  right: false,
  top: false,
};

export default Tracked;
