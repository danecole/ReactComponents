import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const LoadingContent = props =>
  props.isLoading ? <Spinner size={props.size} /> : <div>{props.children}</div>;

LoadingContent.defaultProps = {
  isLoading: true,
  size: 'large',
};

LoadingContent.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

export default LoadingContent;
