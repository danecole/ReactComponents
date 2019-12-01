import React from 'react';
import PropTypes from 'prop-types';

const ProductDeal = ({ description, usualPrice }) => (
  <div className="product-deal text-align-center">
    {description && (
      <div className="product-deal__description">{description}</div>
    )}
    {usualPrice && (
      <div className="product-deal__usual-price">
        <span className="product-deal__usual-price__label text-muted">
          Usually:{' '}
        </span>
        <span className="product-deal__usual-price__amount">${usualPrice}</span>
      </div>
    )}
  </div>
);

ProductDeal.propTypes = {
  description: PropTypes.string.isRequired,
  usualPrice: PropTypes.string.isRequired,
};

export default ProductDeal;
