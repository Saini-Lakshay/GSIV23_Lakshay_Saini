import { get } from "lodash";
import ActionTypes from "../actions/types";

const moviesInitialState = {
  allMovies: [],
  selectedMovie: {},
  loader: false,
  page: 1,
  totalPages: 1,
  totalResult: 0,
};

const movieReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    case ActionTypes.Movies.GET_ALL_MOVIES.REQUEST:
      return {
        ...state,
        loader: true,
      };
    case ActionTypes.Movies.GET_ALL_MOVIES.SUCCESS:
      let updatedMovies =
        get(action, "payload.page", 1) > 1
          ? [...state.allMovies, ...get(action, "payload.results", [])]
          : get(action, "payload.results", []);
      return {
        ...state,
        loader: false,
        allMovies: updatedMovies,
        page: get(action, "payload.page", 1),
        totalPages: get(action, "payload.total_pages", 1),
        totalResult: get(action, "payload.total_results", 0),
      };
    case ActionTypes.Movies.GET_ALL_MOVIES.FAILURE:
      return {
        ...state,
        loader: false,
        // we can add error in state here if needed to display
      };
    case ActionTypes.Movies.GET_ONE_MOVIE.REQUEST:
      return {
        ...state,
        loader: true,
      };
    case ActionTypes.Movies.GET_ONE_MOVIE.SUCCESS:
      return {
        ...state,
        loader: false,
        selectedMovie: get(action, "payload", {}),
      };
    case ActionTypes.Movies.GET_ONE_MOVIE.FAILURE:
      return {
        ...state,
        loader: false,
        // we can add error in state here if needed to display
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
