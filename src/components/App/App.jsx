import React from 'react';
import Example from '../Example';
import PropTypesError from '../PropTypesError';

const App = () => (
  <Example
    requiredNumber={1}
    justNumber={2}
    arrayOfNumbers={[0, '1']} // Wrong prop here!
    shape={{}} // And here!
    errorBoundary={PropTypesError}
  />
);

export default App;
