import DateTimeField from '@NHP/react-bootstrap-datetimepicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import tracked from './tracking/tracked';

const allowedInputFormats = [
  'DD/MM/YYYY',
  'D/M/YYYY',
  'D/M/YY',
  'D.M.YYYY',
  'D.M.YY',
  'D-M-YY',
  'D-M-YYYY',
  'D M YY',
  'D M YYYY',
];

export const DatePicker = props => {
  const {
    dateTime,
    onChange,
    onBlur,
    onEnterKeyDown,
    defaultText,
    name,
    tabIndex,
    direction,
    inputProps,
    minDate,
    maxDate,
    inputFormats,
    format,
  } = props;

  return (
    <DateTimeField
      mode="date"
      inputFormat={inputFormats}
      format={format}
      dateTime={dateTime}
      onChange={onChange}
      onBlur={onBlur}
      onEnterKeyDown={onEnterKeyDown}
      defaultText={defaultText}
      name={name}
      tabIndex={tabIndex}
      direction={direction}
      minDate={minDate}
      maxDate={maxDate}
      inputProps={inputProps}
    />
  );
};

DatePicker.defaultProps = {
  dateTime: '',
  onChange: () => {},
  onBlur: () => {},
  onEnterKeyDown: () => {},
  defaultText: 'DD/MM/YYYY',
  name: undefined,
  tabIndex: undefined,
  direction: undefined,
  inputProps: undefined,
  minDate: undefined,
  maxDate: undefined,
  inputFormats: allowedInputFormats,
  format: undefined,
};

DatePicker.propTypes = {
  dateTime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onEnterKeyDown: PropTypes.func,
  defaultText: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.string,
  direction: PropTypes.oneOf(['auto', 'up', 'bottom']),
  minDate: PropTypes.instanceOf(moment),
  maxDate: PropTypes.instanceOf(moment),
  inputProps: PropTypes.shape({}),
  format: PropTypes.string,
  inputFormats: PropTypes.arrayOf(PropTypes.string),
};

export default tracked(DatePicker);
