import { pokemonReducer } from '@/_slices/pokemon.slice';
import { combineReducers } from 'redux';
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { api } from '@/_services/pokemon.api';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  [api.reducerPath]: api.reducer,
});

// Add this middleware to trigger change event rather than calling useEffect
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const listenerMiddleWare = createListenerMiddleware();

export function setupStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: rootReducer,
    // Add this middleware to trigger change event rather than calling useEffect
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().prepend(listenerMiddleWare.middleware),
    // Being used for RTK query
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
