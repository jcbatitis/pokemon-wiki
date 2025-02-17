import { createSlice } from '@reduxjs/toolkit';
import { PokemonState } from '@/_types/pokemon.types';

const name = 'pokemon';
const initialState = createInitialState();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const extraActions = createExtraActions();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers: {} });

function createInitialState(): PokemonState {
  return {
    selected: null,
    favourites: [],
  };
}

/**
 * Creates extra actions for async thunk functions
 */
function createExtraActions() {}

/**
 *
 */
function createExtraReducers() {}

export const pokemonReducer = slice.reducer;
