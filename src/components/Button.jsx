import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import tracked from './tracking/tracked';
import getButtonStyle from '../util/NHPButtonStyles';

/* eslint-disable react/prefer-stateless-function */
export class Button extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'link', 'delete']),
    size: PropTypes.oneOf(['small', 'xs']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    'aria-expanded': PropTypes.bool, // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    type: 'primary',
    size: undefined,
    onClick: () => {},
    disabled: false,
    children: undefined,
    className: undefined,
    'aria-expanded': undefined,
  };

  render() {
    const { type, size, children, onClick, className, disabled } = this.props;

    const classes = {
      [getButtonStyle(type, size)]: true,
      disabled,
    };

    return (
      <button
        type="button"
        disabled={this.props.disabled}
        className={classNames(classes, className)}
        onClick={onClick}
        aria-expanded={this.props['aria-expanded']}
      >
        {children}
      </button>
    );
  }
}

export default tracked(Button);
