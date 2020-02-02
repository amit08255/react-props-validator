import React from 'react';
import PropTypes from 'prop-types';
import propTypesChecker from '../hoc/propTypesChecker';

const Example = () => <div>Yahooooo!</div>

Example.propTypes = {
  requiredNumber: PropTypes.number.isRequired,
  justNumber: PropTypes.number,
  arrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
  shape: PropTypes.shape({
    string: PropTypes.string,
    oneOf: PropTypes.oneOf(['lol', 'kek']).isRequired,
  }),
};

export default propTypesChecker(Example);
