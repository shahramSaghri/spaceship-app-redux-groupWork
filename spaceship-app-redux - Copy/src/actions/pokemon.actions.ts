export const pokemonTypes = {
  POKEMON_UPDATE: 'POKEMON_UPDATE',
  PROCESSING_NEW_POKEMON: 'PROCESSING_NEW_JOKE'
}

export const getPokemon = (id: number) => async (dispatch) => {
  dispatch({
    type: pokemonTypes.PROCESSING_NEW_POKEMON
  })
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
  const body = await resp.json();
  dispatch({
    payload: {
      name: body.name
    },
    type: pokemonTypes.POKEMON_UPDATE
  })
}

export const sendID = 