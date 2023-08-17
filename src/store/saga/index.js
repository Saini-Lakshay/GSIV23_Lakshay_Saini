import { all } from "redux-saga/effects";
import moviesSaga from "./movies";

const sagas = [...moviesSaga];

export function* rootSaga() {
  yield all(sagas);
}
