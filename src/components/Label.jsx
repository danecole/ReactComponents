import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {
  static defaultProps = {
    color: 'default',
    size: 'default',
    type: 'default',
    children: undefined,
  };

  static propTypes = {
    color: PropTypes.oneOf([
      'default',
      'light-grey',
      'green',
      'orange',
      'red',
      'blue',
      'blue',
    ]),
    size: PropTypes.oneOf(['default', 'large', 'small']),
    type: PropTypes.oneOf(['default', 'boxed']),
    children: PropTypes.node,
  };

  labelClassName() {
    const { color, size, type } = this.props;

    const classes = ['label', type];

    if (color !== 'default') {
      classes.push(color);
    }

    if (size !== 'default') {
      classes.push({ large: 'lrg', small: 'sml' }[size]);
    }

    return classes.join(' ');
  }

  render() {
    const { children } = this.props;

    return <span className={this.labelClassName()}>{children}</span>;
  }
}

export default Label;
