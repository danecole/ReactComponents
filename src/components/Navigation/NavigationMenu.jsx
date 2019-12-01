import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Wrapper, Menu, Button } from 'react-aria-menubutton';
import classnames from 'classnames';
import propTypes from '../../propTypes';
import NavigationMenuLink from './NavigationMenuLink';
import NavigationSeparator from './NavigationSeparator';
import Icons from '../Icons';

const iconComponents = Object.keys(Icons).map(key => Icons[key]);

class NavigationMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: null,
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
    const { label, icon, items } = this.props;
    const wrapperClasses = classnames({
      dropdown: true,
      open: this.state.isOpen,
      active: this.props.active,
    });

    return (
      <Wrapper
        tag="li"
        className={wrapperClasses}
        onMenuToggle={this.onMenuToggle}
        onSelection={this.onSelection}
      >
        <Button tag="a" role="button">
          {label} {icon}
        </Button>
        <Menu tag="ul" className="dropdown-menu">
          {items.map(item =>
            React.cloneElement(item, { key: shortid.generate() })
          )}
        </Menu>
      </Wrapper>
    );
  }
}

NavigationMenu.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  icon: propTypes.component(iconComponents),
  onSelect: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    propTypes.component([NavigationMenuLink, NavigationSeparator])
  ).isRequired,
  active: PropTypes.bool,
};

NavigationMenu.defaultProps = {
  label: undefined,
  icon: undefined,
  active: false,
};

export default NavigationMenu;
