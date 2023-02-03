import * as React from 'react';
import Card from './Card';
interface pokemonItem {
  name: string;
  listOfAbilities: Array<string>;
  img_url: string;
}
export default function ResultBoard(props) {
  const [arrayOfResults, setArrayOfResults] = React.useState([
    // {
    //   name: 'clefairy',
    //   listOfAbilities: ['friend-guard'],
    //   img_url:
    //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    // },
  ]);
  const [text, changeText] = React.useState('search some pokemons')
  const { search, searchedValue } = props;
  async function searchName(input) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1279`)
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
              setArrayOfResults((prev) => [...prev, pokemonData]);
            })
            .catch((err) => console.error(err));
        });
      })
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    if (search && searchedValue !== '') {
      searchName(searchedValue);
    }
    if (search && searchedValue === '') {
      setArrayOfResults([]);
      changeText('search some pokemons')
    }
    props.setSearch(false);
  }, [search]);

  return (
    <div>
      {arrayOfResults.length === 0 ? (
        <div>{text}</div>
      ) : (
        arrayOfResults.map((item: pokemonItem, index: number) => {
          return (
            <Card
              key={item.name + index}
              name={item.name}
              listOfAbilities={item.listOfAbilities}
              img_url={item.img_url}
            />
          );
        })
      )}
    </div>
  );
}
