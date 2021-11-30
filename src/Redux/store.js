import { configureStore } from "@reduxjs/toolkit";
import {
  // itemsReducer,
  filterReducer,
  // errorReducer,
  // isLoadingReducer,
} from "./contacts-reducer";
// import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
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
import logger from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactsApi } from "../Components/Services/contactsApi";
import authReducer from "../Components/Services/connectionApi";

const persistAuthConfig = {
  key: "authToken",
  version: 1,
  storage,
  whitelist: ["token"],
};

// const authPersistReducer = combineReducers({
//   items: authReducer,
//   filter: filterReducer,
//   // loading: isLoadingReducer,
//   // error: errorReducer,
// });
const authPersistReducer = persistReducer(persistAuthConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware, logger),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
