import * as React from 'react';
import Button from './Button';
import Abilities from './Abilities';

export default function Card(props) {
  return (
    <div className="card">
      <Button
        onClickFn={(e) => {
          props.doWhenClicked();
        }}
        name={props.textOfButton}
      />
      <div className="img">
        <img src={props.img_url} alt="Image is not provided" />
      </div>
      <div>
        <span>{props.name}</span>
      </div>
      {props.listOfAbilities?.map((ability, index) => {
        return (
          <Abilities ability={ability} index={index}/>
        );
      })}
    </div>
  );
}
