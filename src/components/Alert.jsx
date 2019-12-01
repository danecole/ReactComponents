import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icons from './Icons';

const ALERT_ICONS = {
  success: <Icons.Success size="22px" />,
  info: <Icons.Info size="22px" />,
  warning: <Icons.Warning size="22px" />,
  danger: <Icons.Error size="22px" />,
};

/* eslint-disable react/prefer-stateless-function */
class Alert extends React.Component {
  static defaultProps = {
    type: 'success',
    inline: undefined,
    children: undefined,
    onDismiss: undefined,
    dismissAfter: undefined,
  };

  static propTypes = {
    type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
    inline: PropTypes.bool,
    children: PropTypes.node,
    onDismiss: PropTypes.func,
    dismissAfter: PropTypes.number,
  };

  render() {
    const { type, inline, children, onDismiss } = this.props;
    let { dismissAfter } = this.props;
    const className = classnames(`alert-flex alert alert-${type}`, {
      'alert-inline': inline,
    });
    if (type === 'success' && dismissAfter === undefined) {
      dismissAfter = 5000;
    }
    if (onDismiss && dismissAfter) {
      setTimeout(onDismiss, dismissAfter);
    }

    return (
      <div role="alert" className={className}>
        {ALERT_ICONS[type]}
        <div className="alert-msg">{children}</div>
        {onDismiss && (
          <button type="button" className="close" onClick={onDismiss}>
            <Icons.Close size="14px" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    );
  }
}

export default Alert;
