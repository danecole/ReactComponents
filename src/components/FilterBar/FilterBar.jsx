import React from 'react';
import propTypes from '../../propTypes';
import FilterGroup from './FilterGroup';
import FilterOption from './FilterOption';

const FilterBar = ({ children }) => (
  <div className="filter__bar">{children}</div>
);

FilterBar.propTypes = {
  children: propTypes.oneOrMore(propTypes.component([FilterGroup])).isRequired,
};

FilterBar.Group = FilterGroup;
FilterBar.Option = FilterOption;

export default FilterBar;
