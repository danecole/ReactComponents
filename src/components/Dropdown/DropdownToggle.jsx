import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-aria-menubutton';

const DropdownToggle = ({ size, type, disabled, children }) => (
  <Button
    tag="button"
    type="button"
    disabled={disabled}
    className={classnames(
      'btn',
      `btn-${type}`,
      { [`btn-${size}`]: size, disabled },
      'dropdown-toggle'
    )}
  >
    {children}
  </Button>
);
DropdownToggle.displayName = 'Dropdown.Toggle';
DropdownToggle.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'small']),
  type: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  disabled: PropTypes.bool,
};
DropdownToggle.defaultProps = {
  type: 'default',
  size: undefined,
  disabled: undefined,
};

export default DropdownToggle;
