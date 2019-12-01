import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import propTypes from '../../propTypes';
import Icons from '../Icons';

const iconComponents = Object.keys(Icons).map(key => Icons[key]);

const NavigationLink = ({ label, icon, url, disabled, active }) => {
  const wrapperClasses = classNames({
    active,
    disabled,
  });
  return (
    <li className={wrapperClasses}>
      <a role="button" href={url}>
        {label} {icon}
      </a>
    </li>
  );
};

NavigationLink.displayName = 'Navigation.Link';
NavigationLink.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: propTypes.component(iconComponents),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

NavigationLink.defaultProps = {
  label: undefined,
  icon: undefined,
  disabled: undefined,
  active: false,
};

export default NavigationLink;
