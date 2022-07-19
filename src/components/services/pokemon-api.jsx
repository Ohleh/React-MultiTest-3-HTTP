function fetchPokemon(nameForApi) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nameForApi}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`no poky with name ${nameForApi}`));
    }
  );
}

export default { fetchPokemon };
