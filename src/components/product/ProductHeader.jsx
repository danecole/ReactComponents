import React from 'react';
import PropTypes from 'prop-types';

const ProductHeader = ({ title }) => (
  <div className="product-header">
    <h2>{title || ''}</h2>
  </div>
);

ProductHeader.propTypes = {
  title: PropTypes.string,
};

ProductHeader.defaultProps = {
  title: undefined,
};

export default ProductHeader;
