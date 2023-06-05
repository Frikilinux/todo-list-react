import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pokeReducer from './pokemonSlice'
import todoReducer from './todoSlice'
import {
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
  REHYDRATE,
  PERSIST,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'

const rootReducers = combineReducers({
  pokemon: pokeReducer,
  todo: todoReducer,
})

const persistConfig = {
  key: 'PokeTodoStorage',
  storage,
  // whitelist: ['pokemon'],
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  // Workarround para el error:
  //   A non-serializable value was detected in an action, in the path: `register`
  // Source: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
