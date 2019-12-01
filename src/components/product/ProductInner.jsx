import React from 'react';
import PropTypes from 'prop-types';

const ProductInner = ({ children }) => (
  <div className="product-inner">{children}</div>
);

ProductInner.propTypes = {
  children: PropTypes.node,
};

ProductInner.defaultProps = {
  children: undefined,
};

export default ProductInner;
