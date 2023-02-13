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
      <div
        className="pokedex_closebutton"
        onClick={() => props.setVsibilityOfPokedex(false)}
      ></div>
      <div className='pokedex-welcome'>Pokedex</div>
      {props.pokemontsInPokedex.map((item: pokemonItem, index: number) => {
        return (
          <Card
            key={item.name + index}
            name={item.name}
            listOfAbilities={item.listOfAbilities}
            img_url={item.img_url}
            textOfButton={'Remove'}
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
