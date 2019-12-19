import React from 'react';

const SECRET = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

const propTypesChecker = (Component) => (props) => {
  const analysis = Object.keys(Component.propTypes).map(key => {
    const validator = Component.propTypes[key];
    return validator(props, key, '', '', null, SECRET);
  });

  const arePropsValid = analysis.every(prop => prop === null);

  return (
    arePropsValid ?
      <Component {...props} /> :
      <div>Error!</div>
  )
}

export default propTypesChecker;
