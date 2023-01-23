import * as React from 'react';
import Card from './Card';
interface pokemonItem {
  name: string;
  listOfAbilities: Array<string>;
  img_url: string;
}
export default function ResultBoard(props) {
  const arrayOfResults: Array<pokemonItem> =
    props.arrayOfResults.length !== 0
      ? props.arrayOfResults
      : [
          {
            name: 'clefairy',
            listOfAbilities: ['friend-guard'],
            img_url:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
          },
        ];
  return (
    <div>
      {arrayOfResults.map((item: pokemonItem) => {
        return (
          <Card
            key={item.name}
            name={item.name}
            listOfAbilities={item.listOfAbilities}
            img_url={item.img_url}
          />
        );
      })}
    </div>
  );
}
