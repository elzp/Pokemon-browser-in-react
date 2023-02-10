import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Input from './Input';
import ResultBoard from './ResultBoard';
import Button from './Button';
import Pokedex from './Pokedex';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [search, setSearch] = useState(false);
  const [ispokedexVisible, setVsibilityOfPokedex] = React.useState(false);
  const [pokemontsInPokedex, setpokemontsInPokedex] = React.useState([]);
  function onInputChange(e) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  function handleClickSearch(e) {
    setSearch(true);
  }

  function updatePokedex(data) {
    const { type, name, listOfAbilities, img_url } = data;
    switch (type) {
      case 'add':
        console.log(type);
        setpokemontsInPokedex((prev) => {
          const next = prev.some((item) => item.name === name)
            ? prev
            : [...prev, { name, listOfAbilities, img_url }];
          return next;
        });
        break;
      case 'remove':
        console.log(type);
      default:
        break;
    }
  }
  return (
    <div>
      <h1>Explore Pokemon World!</h1>
      <div onClick={() => setVsibilityOfPokedex(true)}>Open POKEDEX</div>
      {ispokedexVisible && (
        <Pokedex
          setVsibilityOfPokedex={setVsibilityOfPokedex}
          pokemontsInPokedex={pokemontsInPokedex}
          updatePokedex={updatePokedex}
        />
      )}
      <Input onInputChange={onInputChange} />
      <Button
        onClickFn={(e) => {
          handleClickSearch(e);
        }}
        name={'Search'}
      />
      <ResultBoard
        search={search}
        searchedValue={searchValue}
        setSearch={setSearch}
        updatePokedex={updatePokedex}
      />
    </div>
  );
}
