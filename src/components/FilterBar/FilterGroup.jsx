import React from 'react';
import propTypes from '../../propTypes';
import FilterOption from './FilterOption';

const FilterGroup = ({ children }) => (
  <div className="filter__group">{children}</div>
);

FilterGroup.propTypes = {
  children: propTypes.oneOrMore(propTypes.component([FilterOption])).isRequired,
};

FilterGroup.displayName = 'FilterBar.Group';

export default FilterGroup;
