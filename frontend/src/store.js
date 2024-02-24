import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./loggedslice.js";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };
const persistedReducer = persistReducer(persistConfig, loggedReducer);

export const store = configureStore({
    reducer: {
        logged: persistedReducer ,     

    }
});
export const persistor = persistStore(store);