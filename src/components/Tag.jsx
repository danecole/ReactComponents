import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import propTypes from '../propTypes';

const TagButton = ({ onClick, children }) => (
  <button type="button" className="chip-section" onClick={onClick}>
    {children}
  </button>
);

TagButton.displayName = 'Tag.Button';

TagButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

/* eslint-disable jsx-a11y/label-has-for */
const Tag = ({ accessory, children, color, name, onToggle, selected }) => {
  const classes = classnames('chip', 'chip-xs', {
    [`chip-${color}`]: !!color,
  });
  const id = `Tag_${shortid.generate()}`;
  const toggleHintId = `${id}_togglehint`;
  let contentNode = null;

  if (onToggle) {
    contentNode = (
      <label htmlFor={id} className="chip-section">
        {children}
      </label>
    );
  } else {
    contentNode = <span className="chip-section">{children}</span>;
  }

  return (
    <div className={classes}>
      {!!onToggle && (
        <span className="sr-only" id={toggleHintId}>
          Toggle this tag
        </span>
      )}
      {!!onToggle && (
        <input
          id={id}
          className="chip-toggle"
          type="checkbox"
          checked={selected}
          aria-describedby={toggleHintId}
          onChange={() => onToggle(name)}
        />
      )}
      <div className="chip-container">
        {contentNode}
        {accessory}
      </div>
    </div>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.bool,
  onToggle: PropTypes.func,
  color: PropTypes.oneOf(['lightgrey']),
  children: PropTypes.string.isRequired,
  accessory: propTypes.component([TagButton]),
};

Tag.defaultProps = {
  name: undefined,
  selected: undefined,
  onToggle: undefined,
  color: undefined,
  accessory: undefined,
};

Tag.Button = TagButton;

export default Tag;
