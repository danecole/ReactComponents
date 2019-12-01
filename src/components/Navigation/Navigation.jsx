import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import propTypes from '../../propTypes';
import NavigationBrand from './NavigationBrand';
import NavigationLink from './NavigationLink';
import NavigationMenu from './NavigationMenu';
import NavigationMenuLink from './NavigationMenuLink';
import NavigationSeparator from './NavigationSeparator';

const Navigation = ({ id, brand, primary, secondary }) => (
  <nav id={id} className="navbar navbar-NHP navbar-NHP-header">
    <div className="container">
      {brand && <div className="navbar-header">{brand}</div>}

      <div className="navbar-collapse">
        {!!primary.length && <ul className="nav navbar-nav">{primary}</ul>}

        {!!secondary.length && (
          <ul className="nav navbar-nav navbar-right">{secondary}</ul>
        )}
      </div>
    </div>
  </nav>
);

Navigation.Brand = NavigationBrand;
Navigation.Link = NavigationLink;
Navigation.Menu = NavigationMenu;
Navigation.MenuLink = NavigationMenuLink;
Navigation.Separator = NavigationSeparator;

Navigation.propTypes = {
  id: PropTypes.string,
  brand: propTypes.component([Navigation.Brand]),
  primary: PropTypes.arrayOf(
    propTypes.component([
      Navigation.Link,
      Navigation.Menu,
      Navigation.Separator,
    ])
  ),
  secondary: PropTypes.arrayOf(
    propTypes.component([
      Navigation.Link,
      Navigation.Menu,
      Navigation.Separator,
    ])
  ),
};

Navigation.defaultProps = {
  id: `navigation_${shortid.generate()}`,
  brand: undefined,
  primary: [],
  secondary: [],
};

export default Navigation;
