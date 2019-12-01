import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '../../propTypes';

const FilterOption = ({ children, legend, inline }) => (
  <div className={`filter__option ${inline ? 'flex__row-r flex__d-col' : ''}`}>
    {legend && <legend>{legend}</legend>}
    {inline ? (
      <div className="filter__option--inline">{children}</div>
    ) : (
      children
    )}
  </div>
);

FilterOption.propTypes = {
  children: propTypes.oneOrMore(PropTypes.element).isRequired,
  legend: PropTypes.string,
  inline: PropTypes.bool,
};

FilterOption.defaultProps = {
  legend: null,
  inline: false,
};

export default FilterOption;
