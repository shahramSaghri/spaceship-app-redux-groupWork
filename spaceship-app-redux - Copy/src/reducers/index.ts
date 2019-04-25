import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { chuckNorrisReducer } from "./chuck-norris.reducer";
import { pokemonReducer } from "./pokemon.reducer";

export interface IPokemonState{
  id: number
}

export interface IClickerState {
  clicks: number
}

export interface IChuckNorrisState {
  joke: string,
  proccessingNewJoke: boolean
}

export interface IState {
  clicker: IClickerState,
  chuckNorris: IChuckNorrisState,
  pokemon: IPokemonState
}

export const state = combineReducers<IState>({
  clicker: clickerReducer,
  chuckNorris: chuckNorrisReducer,
  pokemon: pokemonReducer
})