import { call, takeLatest, put } from "redux-saga/effects";
import {
  getAllMoviesService,
  getOneMovieCreditsService,
  getOneMovieService,
} from "../../services/movies";
import { getAllMovies, getOneMovie } from "../actions/movies";
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

export function* getOneMovieSaga(action) {
  try {
    let res = yield call(getOneMovieService, action.payload);
    const creditsRes = yield call(getOneMovieCreditsService, action.payload);
    if (creditsRes.isSuccess) {
      // appending credit response in original resp
      res.data = { ...res.data, ...creditsRes.data };
    }
    if (res.isSuccess) {
      yield put(getOneMovie.SUCCESS(res.data));
    } else {
      yield put(getOneMovie.FAILURE(res));
      toast.error("Error getting all movies!");
    }
  } catch (err) {
    yield put(
      getOneMovie.FAILURE({
        isSuccess: false,
      })
    );
  }
}

const MoviesSaga = () => [
  takeLatest(ActionTypes.Movies.GET_ALL_MOVIES.REQUEST, getAllMoviesSaga),
  takeLatest(ActionTypes.Movies.GET_ONE_MOVIE.REQUEST, getOneMovieSaga),
];
export default MoviesSaga();
