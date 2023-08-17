import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import movieReducer from "./movies";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = () =>
  combineReducers({
    movies: movieReducer,
  });

export default persistReducer(persistConfig, rootReducer());
