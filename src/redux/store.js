import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./slices/userSlice";
import signUpUserSlice from "./slices/signUpUserSlice";
import loadingReducer from "./slices/loadingSlice";

const rootReducer = combineReducers({
  user: userReducer,
  signUpUser: signUpUserSlice,
  loading: loadingReducer,
});
const persistConfig = {
  key: "root",
  storage,
  blackList: ["loading"],
  // whitelist: ["user", "signUpUser"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: rootReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
