import React from 'react';
import PropTypes from 'prop-types';

const ProductName = ({ name }) => <h1 className="product-name">{name}</h1>;

ProductName.propTypes = {
  name: PropTypes.string,
};

ProductName.defaultProps = {
  name: undefined,
};

export default ProductName;
