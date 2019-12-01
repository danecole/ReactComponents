import React from 'react';
import PropTypes from 'prop-types';

const Spinner = props => {
  if (!props.isLoading) {
    return <noscript />;
  }
  const className =
    props.size === 'large' ? 'loadingSpinner' : `${props.size}LoadingSpinner`;

  return <div className={className} style={{ display: 'block' }} />;
};

Spinner.defaultProps = {
  isLoading: true,
  size: 'large',
};

Spinner.propTypes = {
  isLoading: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

export default Spinner;
