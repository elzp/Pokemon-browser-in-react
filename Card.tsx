import * as React from 'react';
import Button from './Button';

export default function Card(props) {
  return (
    <div>
      <img src={props.img_url} alt="" />
      <div>{props.name}</div>
      {props.listOfAbilities.map((ability, index) => {
        return <div key={ability + index}>{ability}</div>;
      })}
      <Button
        onClickFn={(e) => {
          props.doWhenClicked()
        }}
        name={props.textOfButton}
      />
    </div>
  );
}
