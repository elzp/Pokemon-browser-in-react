import * as React from 'react';

export default function Pokedex(props) {
  return (
    <div>
      Pokedex
      <div onClick={() => props.setVsibilityOfPokedex(false)}>close</div>
    </div>
  );
}
