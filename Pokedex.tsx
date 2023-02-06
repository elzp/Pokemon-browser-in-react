import * as React from 'react';
import './style.css';

export default function Pokedex(props) {
  return (
    <div  className="pokedex">
      Pokedex
      <div onClick={() => props.setVsibilityOfPokedex(false)}>close</div>
    </div>
  );
}
