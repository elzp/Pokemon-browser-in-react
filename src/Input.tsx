import * as React from 'react';

export default function Input(props: any) {
  return <input onChange={(e) => props.onInputChange(e)}></input>;
}
