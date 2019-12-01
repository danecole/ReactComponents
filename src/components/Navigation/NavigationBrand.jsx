import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '../../propTypes';
import NHPLogo from '../NHPLogo/NHPLogo';

const NavigationBrand = ({ url, width, children }) => (
  <a href={url} className="navbar-brand">
    <div style={{ width }}>{children}</div>
  </a>
);

NavigationBrand.displayName = 'Navigation.Brand';
NavigationBrand.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  children: propTypes.component([NHPLogo]).isRequired,
};

NavigationBrand.defaultProps = {
  width: '100%',
};

export default NavigationBrand;
