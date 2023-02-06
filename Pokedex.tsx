import * as React from 'react';
import Card from './Card';
import './style.css';
interface pokemonItem {
  name: string;
  listOfAbilities: Array<string>;
  img_url: string;
}
export default function Pokedex(props) {
  return (
    <div className="pokedex">
      Pokedex
      <div onClick={() => props.setVsibilityOfPokedex(false)}>close</div>
      {props.pokemontsInPokedex.map((item: pokemonItem, index: number) => {
        return (
          <Card
            key={item.name + index}
            name={item.name}
            listOfAbilities={item.listOfAbilities}
            img_url={item.img_url}
            textOfButton={'Add to Pokedex'}
            doWhenClicked={() =>
              props.updatePokedex({
                type: 'remove',
                name: item.name,
                listOfAbilities: item.listOfAbilities,
                img_url: item.img_url,
              })
            }
          />
        );
      })}
    </div>
  );
}
