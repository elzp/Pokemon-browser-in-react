let allNames = [];

(async () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1279`)
    .then((response) => response.json())
    .then((response) => {
      allNames = response;
      console.log(response);
    })
    .catch((err) => console.error(err));
})();

export default allNames;
