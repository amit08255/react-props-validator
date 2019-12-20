import React from 'react';
import SECRET from '../../constants/secret';
import PropTypesError from '../PropTypesError';

const propTypesChecker = (Component) => (props) => {
  const analysis = Object.keys(Component.propTypes).map(key => {
    const validator = Component.propTypes[key];

    return validator(props, key, Component.name, '', null, SECRET);
  });

  const errors = analysis.filter((error) => error !== null);
  const arePropsValid = errors.length === 0;

  return (
    arePropsValid ?
      <Component {...props} /> :
      <PropTypesError
        icon={props.icon}
        errors={errors}
      />
  )
}

export default propTypesChecker;
