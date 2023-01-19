import * as React from 'react';
import Card from './Card';
export default function ResultBoard(props) {
  return (
    {props.arrayOfResults.map(item=>{
      return (
        <Card name={item.name} listOfAbilities={item.listOfAbilities}/>
      )
    })}
  );
}
