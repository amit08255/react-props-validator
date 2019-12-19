import React from 'react';
import PropTypes from 'prop-types';
import propTypesChecker from '../hoc/propTypesChecker';

const Validator = (props) => {
  // console.log(PropTypes.number({ x: '1' }, 'x', 'Best component', 'location', null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'))
  // const alanysis = Object.keys(Validator.propTypes).map(key => {
  //   const validator = Validator.propTypes[key];
  //   return validator(props, key, 'Validator', '', null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
  // });
  // console.log(alanysis);

  // console.log(Validator)
  return (
    <div>
      Yahooooo!
    </div>
  )
}

Validator.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  coords: PropTypes.arrayOf(PropTypes.number)
}

export default propTypesChecker(Validator);
