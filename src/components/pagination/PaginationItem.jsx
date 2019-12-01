import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SafeAnchor } from './SafeAnchor';

const noop = () => {};

export const PaginationItem = ({
  children,
  active,
  disabled,
  label,
  onClick,
}) => (
  <li className={classnames({ active, disabled })} aria-label={label}>
    <SafeAnchor onClick={onClick}>{children}</SafeAnchor>
  </li>
);

PaginationItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PaginationItem.defaultProps = {
  active: false,
  disabled: false,
  label: undefined,
  onClick: noop,
};

export default PaginationItem;
