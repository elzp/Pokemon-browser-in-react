import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Input from './Input';
import ResultBoard from './ResultBoard';
import Button from './Button';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [arrayOfResults, setArrayOfResults] = useState([]);

  function searchName(input) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1279`)
      .then((response) => response.json())
      .then((response) => {
        const allNames = response.results;

        const regex = new RegExp(`${input}`, 'i');
        const resultOfSearch = allNames.filter((item) => regex.test(item.name));
        return resultOfSearch;
      })
      .then((response) => {
        let arrayCointainer = [];
        response.forEach((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((response) => {
              const pokemonData = {
                name: response.name,
                listOfAbilities: response.abilities.map(
                  (item) => item.ability.name
                ),
                img_url: response.sprites.front_default,
              };
              arrayCointainer.push(pokemonData);
            });
        });
        console.log('results after ferxching', arrayCointainer);
        setArrayOfResults(arrayCointainer);
      })
      .catch((err) => console.error(err));
  }

  function onInputChange(e) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  function handleClickSearch(e) {
    searchName(searchValue);
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Input onInputChange={onInputChange} />
      <Button
        onClickFn={(e) => {
          handleClickSearch(e);
        }}
        name={'Search'}
      />
      <ResultBoard arrayOfResults={arrayOfResults} />
    </div>
  );
}
