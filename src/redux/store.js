import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pokeReducer from './pokemonSlice'
import todoReducer from './todoSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/lib/persistStore'
import storage from 'redux-persist/lib/storage'

const rootReducers = combineReducers({
  pokemon: pokeReducer,
  todo: todoReducer,
})

const persistConfig = {
  key: 'PokeTodoStorage',
  storage,
  // whitelist: ['todo'],
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

// export const store = configureStore({
//   reducer: {
//     pokemon: pokeReducer,
//     todo: todoReducer,
//   },
// })
