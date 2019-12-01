import React from 'react';
import hasOwnPropertyValue from '../util/hasOwnPropertyValue';

const component = allowedComponents => {
  const names = allowedComponents
    .map(({ displayName, name }) => `\`${displayName || name}\``)
    .join(', ');

  const validator = (props, propName, componentName) => {
    if (!hasOwnPropertyValue(props, propName)) {
      return null;
    }
    const value = props[propName];
    const valid = React.isValidElement(value);
    const err = new Error(
      [
        `Invalid component prop \`${propName}\` supplied to \`${componentName}\`,`,
        `expected one of ${names}.`,
      ].join(' ')
    );

    if (!valid) {
      return err;
    }

    const { type } = value;

    for (let i = 0; i < allowedComponents.length; i += 1) {
      if (type === allowedComponents[i]) {
        return null;
      }
    }

    return err;
  };

  validator.isRequired = (props, propName, componentName) => {
    if (!hasOwnPropertyValue(props, propName)) {
      return new Error(
        `Required prop \`${propName}\` was not specified in \`${componentName}\``
      );
    }
    return validator(props, propName, componentName);
  };

  return validator;
};

export default component;
