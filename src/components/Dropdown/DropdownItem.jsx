import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'react-aria-menubutton';

/* eslint-disable jsx-a11y/anchor-is-valid */
const renderDisabled = label => (
  <li className="disabled">
    <a role="button">{label}</a>
  </li>
);

const renderEnabled = (label, value) => (
  <MenuItem tag="li" text={label} value={value}>
    <a role="button">{label}</a>
  </MenuItem>
);

const DropdownItem = ({ label, value, disabled }) =>
  disabled ? renderDisabled(label, value) : renderEnabled(label, value);

DropdownItem.displayName = 'Dropdown.Item';
DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default DropdownItem;
