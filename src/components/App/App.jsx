import React from 'react';
import Validator from '../Validator';

const App = () => {
  return (
    <Validator 
      x={1}
      y={2}
      coords={[0, "1"]}
    />
  )
}

export default App;
