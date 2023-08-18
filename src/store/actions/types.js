import { actionTypeCreator } from "../../utils";

const GET_ALL_MOVIES = actionTypeCreator("GET_ALL_MOVIES");
const GET_ONE_MOVIE = actionTypeCreator("GET_ONE_MOVIE");
const GET_SEARCH_MOVIES = actionTypeCreator("GET_SEARCH_MOVIES");
const SET_SEARCH_KEYWORD = actionTypeCreator("SET_SEARCH_KEYWORD");

const Movies = {
  GET_ALL_MOVIES,
  GET_ONE_MOVIE,
  GET_SEARCH_MOVIES,
  SET_SEARCH_KEYWORD,
};

const ActionTypes = {
  Movies,
};

export default ActionTypes;
