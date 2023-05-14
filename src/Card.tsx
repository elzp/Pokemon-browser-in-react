import * as React from 'react';
import Button from './Button';
interface ability {
  name: string,
  url: string,
  description: string,
}

export default function Card(props: any) {

  return (
    <div className="card">
      <Button
        onClickFn={(e: Event) => {
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
      {props.listOfAbilities?.map((ability: ability, index: number) => {
        return (
          <div key={ability.name + index}>
            {ability.name}
            <div className="description">{ability.description}</div>
          </div>
        );
      })}
    </div>
  );
}
