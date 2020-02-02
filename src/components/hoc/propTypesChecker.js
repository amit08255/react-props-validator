import React from 'react';
import SECRET from 'prop-types/lib/ReactPropTypesSecret';

const propTypesChecker = (Component) => (props) => {
  const analysis = Object.keys(Component.propTypes).map((key) => {
    const validator = Component.propTypes[key];
    return validator(props, key, Component.name, '', null, SECRET);
  });

  const errors = analysis.filter((error) => error !== null).map((error) => error.message);
  const arePropsValid = errors.length === 0;
  const ErrorBoundary = props.errorBoundary;

  return (
    arePropsValid
      ? <Component {...props} />
      : <ErrorBoundary errors={errors} />
  );
};

export default propTypesChecker;
