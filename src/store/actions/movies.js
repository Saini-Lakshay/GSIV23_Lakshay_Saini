import { actionCreator } from "../../utils";
import ActionTypes from "./types";

const { GET_ALL_MOVIES, GET_ONE_MOVIE, GET_SEARCH_MOVIES, SET_SEARCH_KEYWORD } =
  ActionTypes.Movies;

export const getAllMovies = actionCreator(GET_ALL_MOVIES);
export const getOneMovie = actionCreator(GET_ONE_MOVIE);
export const getSearchMovies = actionCreator(GET_SEARCH_MOVIES);
export const setSearchKeyword = actionCreator(SET_SEARCH_KEYWORD);
