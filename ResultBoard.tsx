import * as React from 'react';
import Card from './Card';
interface pokemonItem {
  name: string;
  listOfAbilities: Array<string>;
  img_url: string;
}
export default function ResultBoard(props) {
  const [arrayOfResults, setArrayOfResults] = React.useState([]);
  const [text, changeText] = React.useState('search some pokemons');
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
                listOfAbilities: response.abilities.map((item) => {
                  return {
                    name: item.ability.name,
                    url: item.ability.url,
                  };
                }),
                img_url: response.sprites.front_default,
              };
              return pokemonData;
            })
            .then((response) => {
              let result = [];
              response.listOfAbilities.forEach(async (ability) => {
                let newAbility = { ...ability };
                console.log('newAbility', newAbility);
                await fetch(ability.url)
                  .then((response21) => response21.json())
                  .then((response22) => {
                    // console.log(
                    //   response3.effect_entries.filter(
                    //     (item) => item.language.name === 'en'
                    //   )[0]?.short_effect
                    // );
                    newAbility['description'] =
                      response22.effect_entries.filter(
                        (item) => item.language.name === 'en'
                      )[0]?.short_effect;
                  });
                result.push(newAbility);
              });
              console.log('result', result, 'response', response);
              response.listOfAbilities = result;
              setArrayOfResults((prev) => [...prev, response]);
            })
            .catch((err) => console.error(err));
        });
      })
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    if (!search) {
      setArrayOfResults([]);

      if (arrayOfResults.length === 0 && searchedValue !== '') {
        changeText('we not found pokemons with this phrase');
      }
    }
    if (search && searchedValue !== '') {
      searchName(searchedValue);
    }
    if (search && searchedValue === '') {
      setArrayOfResults([]);
      changeText('search some pokemons');
    }
    props.setSearch(false);
  }, [search]);

  return (
    <div className="resultBoard">
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
              textOfButton={'Add to Pokedex'}
              doWhenClicked={() =>
                props.updatePokedex({
                  type: 'add',
                  name: item.name,
                  listOfAbilities: item.listOfAbilities,
                  img_url: item.img_url,
                })
              }
            />
          );
        })
      )}
    </div>
  );
}
