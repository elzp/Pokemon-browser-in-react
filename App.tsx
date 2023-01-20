import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Input from './Input';
import ResultBoard from './ResultBoard';

export default function App() {
  const [searchValue, setSeatchValue] = useState('');
  const [arrayOfResults, setArrayOfResults] = useState([]);
  function onInputChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Input onInputChange={onInputChange} />
      <ResultBoard arrayOfResults={arrayOfResults} />
    </div>
  );
}
