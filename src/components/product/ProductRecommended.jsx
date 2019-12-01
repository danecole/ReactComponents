import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import Icons from '../Icons';

const ProductRecommended = ({ infoToolTipText }) => (
  <div className="product-recommended text-align-center">
    <div className="product-recommended__approve">
      <Icons.Approve />
    </div>
    <div className="product-recommended__text">
      <p>Recommended</p>
    </div>
    <div className="product-recommended__info">
      <Tooltip
        triggerContent={
          <div>
            <Icons.Info size="18px" />
          </div>
        }
      >
        {infoToolTipText}
      </Tooltip>
    </div>
  </div>
);

ProductRecommended.propTypes = {
  infoToolTipText: PropTypes.string,
};

ProductRecommended.defaultProps = {
  infoToolTipText: undefined,
};

export default ProductRecommended;
