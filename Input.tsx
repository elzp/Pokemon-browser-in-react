import * as React from 'react';

export default function Input(props) {
  return <input onChange={(e) => props.onInputChange(e)}></input>;
}
