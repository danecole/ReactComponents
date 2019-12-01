import React from 'react';
import PropTypes from 'prop-types';

const ProductLink = ({ link, onClick }) => (
  <div className="margin-top-20 product-link">
    <h5>
      <a
        href={link}
        onClick={event => onClick(event)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Find out more <i className="fa fa-angle-right" />
      </a>
    </h5>
  </div>
);

ProductLink.propTypes = {
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ProductLink.defaultProps = {
  onClick: () => {},
};

export default ProductLink;
