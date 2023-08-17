import { call, takeLatest, put } from "redux-saga/effects";
import { getAllMoviesService } from "../../services/movies";
import { getAllMovies } from "../actions/movies";
import { toast } from "react-toastify";
import ActionTypes from "../actions/types";

export function* getAllMoviesSaga(action) {
  try {
    const res = yield call(getAllMoviesService, action.payload);
    if (res.isSuccess) {
      yield put(getAllMovies.SUCCESS(res.data));
    } else {
      yield put(getAllMovies.FAILURE(res));
      toast.error("Error getting all movies!");
    }
  } catch (err) {
    yield put(
      getAllMovies.FAILURE({
        isSuccess: false,
      })
    );
  }
}

const MoviesSaga = () => [
  takeLatest(ActionTypes.Movies.GET_ALL_MOVIES.REQUEST, getAllMoviesSaga),
];
export default MoviesSaga();
