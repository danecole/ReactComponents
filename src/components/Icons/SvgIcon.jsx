import React from 'react';
import PropTypes from 'prop-types';
import Svgs from './Svgs';
import LargeSvgSet from './LargeSvgSet';

const sets = {
  sm: Svgs,
  lg: LargeSvgSet,
};

const sizes = {
  sm: '18',
  lg: '32',
};

const SvgIcon = ({ size, type, title, set }) => {
  const ariaAttribute = title
    ? { 'aria-label': title }
    : { 'aria-hidden': 'true' };

  const iconSet = sets[set];
  const iconSize = sizes[set];

  return (
    <svg
      className={`svg-icon svg-icon-${type}`}
      {...ariaAttribute}
      xmlns="http://www.w3.org/2000/svg"
      width={size || `${iconSize}px`}
      height={size || `${iconSize}px`}
      viewBox={`0 0 ${iconSize} ${iconSize}`}
    >
      {iconSet[type]}
    </svg>
  );
};

SvgIcon.propTypes = {
  size: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(Svgs)).isRequired,
  title: PropTypes.string,
  set: PropTypes.oneOf(['sm', 'lg']),
};

SvgIcon.defaultProps = {
  size: undefined,
  title: undefined,
  set: 'sm',
};

export default SvgIcon;
