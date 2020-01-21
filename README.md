# About props-validation package

This is the Error Boundary for validation prop-types in React. 
When the error in prop-types occured user will see the PropTypesError component.

## Installation

With NPM:
```
npm i props-validation --save
```
Or with Yarn:
```
yarn add props-validation --save
```

## Usage

You can simply use it as any other HOC.
Just like that:
```
import propTypesChecker from '../hoc/propTypesChecker';
...
export default propTypesChecker(<ComponentName>);
```
