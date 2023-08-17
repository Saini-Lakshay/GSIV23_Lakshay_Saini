import { actionTypeCreator } from "../../utils";

const GET_ALL_MOVIES = actionTypeCreator("GET_ALL_MOVIES");
const GET_ONE_MOVIE = actionTypeCreator("GET_ONE_MOVIE");

const Movies = {
  GET_ALL_MOVIES,
  GET_ONE_MOVIE,
};

const ActionTypes = {
  Movies,
};

export default ActionTypes;
