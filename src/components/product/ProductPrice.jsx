import React from 'react';
import PropTypes from 'prop-types';

const ProductPrice = ({ price, gstLabel, unit }) => {
  const parts = price.toString().split('.');
  return (
    <div className="product-price">
      <div className="product-price__row">
        <h2>$</h2>
        <h1>{parts[0]}</h1>
        <div className="product-price__row__decimal-detail">
          <h2>
            .{parts[1]} {gstLabel}
          </h2>
          <br />
          <p>&nbsp;/{unit}</p>
        </div>
      </div>
    </div>
  );
};

ProductPrice.propTypes = {
  price: PropTypes.string,
  gstLabel: PropTypes.string,
  unit: PropTypes.string,
};

ProductPrice.defaultProps = {
  price: undefined,
  gstLabel: undefined,
  unit: undefined,
};

export default ProductPrice;
