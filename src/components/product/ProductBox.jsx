import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ProductBox = ({ children, style, isSelected }) => (
  <div
    className={classNames('flx-product-box__product-box', style, {
      'product-selected': isSelected,
    })}
  >
    {children}
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  isSelected: PropTypes.bool,
};

ProductBox.defaultProps = {
  children: undefined,
  style: undefined,
  isSelected: false,
};

export default ProductBox;
