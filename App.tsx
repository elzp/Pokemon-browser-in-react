import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Input from './Input';

export default function App() {
  const [searchValue, setSeatchValue] = useState('');
  function onInputChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Input onInputChange={onInputChange} />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
