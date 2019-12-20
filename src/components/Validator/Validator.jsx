import React from 'react';
import PropTypes from 'prop-types';
import propTypesChecker from '../hoc/propTypesChecker';

const Validator = () => (
    <div>
      Yahooooo!
    </div>
);

Validator.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number,
  coords: PropTypes.arrayOf(PropTypes.number),
};

export default propTypesChecker(Validator);
