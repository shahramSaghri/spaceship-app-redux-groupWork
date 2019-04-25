import { IPokemonState } from ".";
import { pokemonTypes } from "../actions/pokemon.actions";
//import { chuckNorrisTypes } from "../actions/chuck-norris.actions";


const initialState: IPokemonState = {
  id: 1,
  
}

export const pokemonReducer = (state = initialState, action) => {

  switch (action.type) {
    case pokemonTypes.POKEMON_UPDATE:
      return {
        ...state,
        pokemon: action.payload.name,
        proccessingNewPokemon: false
      }  
    case pokemonTypes.PROCESSING_NEW_POKEMON: 
      return {
        ...state,
        proccessingNewPokemon: true
      }
    default:
      break;
  }

  return state;
}