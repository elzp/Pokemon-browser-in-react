import * as React from 'react';
import { useState } from 'react';
import './../style.css';
import Input from './Input';
import ResultBoard from './ResultBoard';
import Button from './Button';
import Pokedex from './Pokedex';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [search, setSearch] = useState(false);
  const [ispokedexVisible, setVsibilityOfPokedex] = React.useState(false);
  const [pokemontsInPokedex, setpokemontsInPokedex] = React.useState([]);
  function onInputChange(e: any) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  function handleClickSearch(e: Event) {
    setSearch(true);
  }
interface pokemonData {
  type: 'add'|'remove',
  name: string,
  listOfAbilities: Array<string>,
  img_url: string
}
  function updatePokedex(data: pokemonData) {
    const { type, name, listOfAbilities, img_url } = data;
    switch (type) {
      case 'add':
        setpokemontsInPokedex((prev: any) => {
          const next = prev.some((item: pokemonData) => item.name === name)
            ? prev
            : [...prev, { name, listOfAbilities, img_url }];
          return next;
        });
        break;
      case 'remove':
        setpokemontsInPokedex((prev) => {
          const next = prev.filter((item: pokemonData) => item.name !== name);
          console.log('next', next);
          return next;
        });
      default:
        break;
    }
  }
  return (
    <div className="app">
      <div className="app-head">
        <div
            className="button-to-pokedex"
            onClick={() => {
              setVsibilityOfPokedex(true);
              setVsibilityOfPokedex(!ispokedexVisible);
            }}
        >
          <div className="circle-inside-pokedex"></div>
        </div>
        <h1>Explore Pokemon World!</h1>
      </div>
      {ispokedexVisible && (
        <Pokedex
          setVsibilityOfPokedex={setVsibilityOfPokedex}
          pokemontsInPokedex={pokemontsInPokedex}
          updatePokedex={updatePokedex}
        />
      )}
      

      <div className="search">
        <Input onInputChange={onInputChange} />
        <Button
          onClickFn={(e: Event) => {
            handleClickSearch(e);
          }}
          name={'Search'}
        />
        <div>Check your collection in Pokedex!</div>
      </div>
      <ResultBoard
        search={search}
        searchedValue={searchValue}
        setSearch={setSearch}
        updatePokedex={updatePokedex}
      />
    </div>
  );
}
