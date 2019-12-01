import PropTypes from 'prop-types';

const oneOrMore = validTypes =>
  PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([validTypes, PropTypes.arrayOf(validTypes)])
    ),
    validTypes,
  ]);

export default oneOrMore;
