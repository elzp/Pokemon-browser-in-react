import * as React from 'react';

export default function Card(props) {
  return (
    <div>
      <img src="" alt="" />
      <div>{props.name}</div>
      {props.listOfAbilities.map((ability) => {
        return <div>{ability}</div>;
      })}
      Button
    </div>
  );
}
