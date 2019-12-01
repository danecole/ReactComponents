import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { MenuItem } from 'react-aria-menubutton';
import propTypes from '../../propTypes';
import Icons from '../Icons';

const iconComponents = Object.keys(Icons).map(key => Icons[key]);
const passThrough = () => true;

/* eslint-disable jsx-a11y/anchor-is-valid */
const renderDisabled = (label, icon) => (
  <li className="disabled" key={shortid.generate()}>
    <a role="button">
      {label} {icon}
    </a>
  </li>
);

const renderEnabled = (label, icon, url, target, onClick = passThrough) => {
  const targetAttributes = target
    ? { target, rel: 'noFollow noReferrer noOpener' }
    : {};
  return (
    <MenuItem tag="li" text={label} value={url} key={shortid.generate()}>
      <a role="button" href={url} {...targetAttributes} onClick={onClick}>
        {icon} {label}
      </a>
    </MenuItem>
  );
};

const NavigationLink = ({ label, icon, url, disabled, target, onClick }) =>
  disabled
    ? renderDisabled(label, icon)
    : renderEnabled(label, icon, url, target, onClick);

NavigationLink.displayName = 'Navigation.MenuLink';
NavigationLink.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: propTypes.component(iconComponents),
  disabled: PropTypes.bool,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  onClick: PropTypes.func,
};

export default NavigationLink;
