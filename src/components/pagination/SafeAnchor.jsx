import React from 'react';
import PropTypes from 'prop-types';
import tracked from '../tracking/tracked';
/**
 * Note: booted from react-bootstrap to fix IEs issue when creating an empty href
 * see props.href = props.href || '#';
 */

/* eslint-disable react/forbid-prop-types */
const propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  role: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  componentClass: PropTypes.any,
};

const defaultProps = {
  href: undefined,
  onClick: undefined,
  disabled: undefined,
  role: undefined,
  tabIndex: undefined,
  componentClass: 'a',
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

export class SafeAnchor extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { disabled, href, onClick } = this.props;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }

  render() {
    const { componentClass: Component, disabled, ...props } = this.props;
    delete props.eventKey;

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button';
      // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')
      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props.style = { pointerEvents: 'none', ...props.style };
    }

    return <Component {...props} onClick={this.handleClick} />;
  }
}

SafeAnchor.propTypes = propTypes;
SafeAnchor.defaultProps = defaultProps;

export default tracked(SafeAnchor);
