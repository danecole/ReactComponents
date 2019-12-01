import React from 'react';
import PropTypes from 'prop-types';

const ProductDescription = ({ children }) => (
  <div className="product-description text-align-center text-muted">
    {children}
  </div>
);

ProductDescription.propTypes = {
  children: PropTypes.node,
};

ProductDescription.defaultProps = {
  children: undefined,
};

export default ProductDescription;
