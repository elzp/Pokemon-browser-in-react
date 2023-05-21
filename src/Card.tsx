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
      <div>
        <span>{props.name}</span>
      </div>
      <div className="flexed">
      <div className="img">
        <img src={props.img_url} alt="Image is not provided" />
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
      <div className="to-bottom">
        <Button  
          onClickFn={(e: Event) => {
            props.doWhenClicked();
          }}
          name={props.textOfButton}
        />
      </div>
    </div>
  );
}
