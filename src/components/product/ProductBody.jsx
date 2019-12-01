import React from 'react';
import PropTypes from 'prop-types';

const ProductBody = ({ children }) => (
  <div className="flx-product-box__product-body">{children}</div>
);

ProductBody.propTypes = {
  children: PropTypes.node,
};

ProductBody.defaultProps = {
  children: undefined,
};

export default ProductBody;
