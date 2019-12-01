import React from 'react';
import PropTypes from 'prop-types';
import Icons from './Icons';

const states = ['default', 'queued', 'loading', 'finished', 'failed'];

const toHumanSize = bytes => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (!bytes) {
    return `0 ${sizes[0]}`;
  }
  const k = 1000;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const normalisedBytes = (bytes / k ** i).toPrecision(3);
  const unit = sizes[i];
  return `${normalisedBytes} ${unit}`;
};

const nonBreakingSize = size => toHumanSize(size).replace(' ', '\u00A0');

const optionsForState = {
  default: { icon: null },
  queued: { icon: <Icons.Upload />, className: 'flx-chip__state--loading' },
  loading: { icon: <Icons.Upload />, className: 'flx-chip__state--loading' },
  finished: { icon: <Icons.Success />, className: 'flx-chip__state--finished' },
  failed: { icon: <Icons.Error />, className: 'flx-chip__state--error' },
};

const iconForState = state => {
  const { icon, className } = optionsForState[state];
  return icon ? (
    <div className={['flx-chip__state', className].join(' ')}>{icon}</div>
  ) : null;
};

const errorSubtitle = error => <div className="help-block">{error}</div>;

const invokeOnRemove = onRemove => e => {
  onRemove();
  e.stopPropagation();
};

const removeButton = onRemove => (
  <button
    type="button"
    onClick={invokeOnRemove(onRemove)}
    className="remove-button"
  >
    <Icons.Remove />
  </button>
);

const progressBar = (size, uploaded) => (
  <progress
    className="flx-progress-bar flx-progress-bar--loading"
    max="100"
    value={uploaded / size * 100}
  />
);

const queuedBar = () => (
  <div className="flx-progress-bar flx-progress-bar--queue" />
);

const fileIcon = <Icons.GenericDocument set="lg" />;

const FileChip = ({ error, onRemove, children, ...attachment }) => {
  const { name, size, state, loaded } = attachment;
  const isStateFailed =
    state === 'failed'
      ? 'flx-chip flx-chip--file has-error'
      : 'flx-chip flx-chip--file';
  return (
    <div className={isStateFailed}>
      <div className="flx-chip__icon">
        {fileIcon}
        {iconForState(state)}
      </div>
      <div className="flx-chip__details">
        <div className="flx-chip__title-group">
          <span className="flx-chip__main-title">{name}</span>
          <span className="flx-chip__sub-title">{nonBreakingSize(size)}</span>
        </div>
        {state === 'failed' ? errorSubtitle(error) : null}
        {state === 'loading' ? progressBar(size, loaded) : null}
        {state === 'queued' ? queuedBar() : null}
      </div>
      <div className="flx-chip__actions">
        {children}
        {onRemove ? removeButton(() => onRemove(attachment)) : null}
      </div>
    </div>
  );
};

FileChip.propTypes = {
  state: PropTypes.oneOf(states),
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  loaded: PropTypes.number,
  error: PropTypes.string,
  onRemove: PropTypes.func,
  children: PropTypes.element,
};

FileChip.defaultProps = {
  state: 'default',
  loaded: 0,
  error: '',
  onRemove: null,
  children: null,
};

export default FileChip;
