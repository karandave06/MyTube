// src/redux/store.js

import { configureStore,combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import SidebarReducer from "./SidebarSlice";
import VideoReducer from './VideoSlice'
import VideoPopup from './VideoPopup';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: UserReducer,
   sidebar: SidebarReducer,
   video:VideoReducer,
   popupVideo:VideoPopup
  })
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const newStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});


export const parsistore = persistStore(newStore)