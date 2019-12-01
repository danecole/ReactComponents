import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';
import { Tooltip as TooltipElement, OverlayTrigger } from 'react-bootstrap';
import Icons from './Icons';

const Tooltip = ({
  id,
  children,
  placement,
  className,
  trigger,
  triggerContent,
}) => {
  const tooltipId = id || `Tooltip_${shortid.generate()}`;

  const tooltipElement = (
    <TooltipElement id={tooltipId}>{children}</TooltipElement>
  );

  const classes = {
    'tooltip-icon':
      ['bound icon', 'icon'].indexOf(triggerContent.type.name) !== -1,
  };

  return (
    <OverlayTrigger
      placement={placement}
      overlay={tooltipElement}
      trigger={trigger}
    >
      <span className={classNames(classes, className)}>{triggerContent}</span>
    </OverlayTrigger>
  );
};

const triggerType = PropTypes.oneOf(['click', 'hover', 'focus']);

Tooltip.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  className: PropTypes.string,
  trigger: PropTypes.oneOfType([triggerType, PropTypes.arrayOf(triggerType)]),
  triggerContent: PropTypes.node,
};

Tooltip.defaultProps = {
  id: undefined,
  className: undefined,
  placement: 'top',
  trigger: ['click', 'hover', 'focus'],
  triggerContent: <Icons.Info />,
};

export default Tooltip;
