import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Label from '../Label';

const PREFIX = 'page-head';

const PageHead = props => {
  const { title, tag, children } = props;

  return (
    <div className={classnames(`${PREFIX}`)}>
      <div className={classnames(`${PREFIX}__title`)}>
        <h1>{title}</h1>
        {tag && (
          <Label color="blue" type="boxed">
            {tag}
          </Label>
        )}
      </div>
      <div className={classnames(`${PREFIX}__actions`)}>{children}</div>
    </div>
  );
};

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string,
  children: PropTypes.node,
};

PageHead.defaultProps = {
  tag: undefined,
  children: undefined,
};

export default PageHead;
