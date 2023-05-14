import * as React from 'react';

export default function Button(props: any) {
  const name = props.name === undefined ? 'click' : props.name;
  return <button onClick={(e) => props.onClickFn(e)}>{name}</button>;
}
