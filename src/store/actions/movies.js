import { actionCreator } from "../../utils";
import ActionTypes from "./types";

const { GET_ALL_MOVIES, GET_ONE_MOVIE } = ActionTypes.Movies;

export const getAllMovies = actionCreator(GET_ALL_MOVIES);
export const getOneMovie = actionCreator(GET_ONE_MOVIE);
