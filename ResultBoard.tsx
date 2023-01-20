import * as React from 'react';
import Card from './Card';
interface pokemonItem {
  name: string;
  listOfAbilities: Array<string>;
}
export default function ResultBoard(props) {
  const arrayOfResults: Array<pokemonItem> = props.arrayOfResults ?? [
    { name: '1', listOfAbilities: ['11', '12'] },
  ];
  return (
    <div>
      {arrayOfResults.map((item: pokemonItem) => {
        return <Card name={item.name} listOfAbilities={item.listOfAbilities} />;
      })}
    </div>
  );
}
