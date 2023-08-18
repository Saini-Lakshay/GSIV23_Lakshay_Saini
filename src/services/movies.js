import { mapQueryParams } from "../utils";

export const getAllMoviesService = async (data) => {
  let prevUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=2bf70ba6e5e262fad875b833fe8b5d26&sort_by=release_date.desc"; // remove apiKey from here and move to env file
  let url = mapQueryParams(prevUrl, data);
  const resp = await fetch(url);
  if (resp) {
    const jsonResp = await resp.json();
    return { data: jsonResp, isSuccess: true };
  }
  return {
    isSuccess: false,
  };
};

export const getOneMovieService = async (data) => {
  let url = `https://api.themoviedb.org/3/movie/${data.id}?api_key=2bf70ba6e5e262fad875b833fe8b5d26`; // remove apiKey from here and move to env file
  // let url = mapQueryParams(prevUrl, data);
  const resp = await fetch(url);
  if (resp) {
    const jsonResp = await resp.json();
    return { data: jsonResp, isSuccess: true };
  }
  return {
    isSuccess: false,
  };
};

export const getOneMovieCreditsService = async (data) => {
  let url = `https://api.themoviedb.org/3/movie/${data.id}/credits?api_key=2bf70ba6e5e262fad875b833fe8b5d26`; // remove apiKey from here and move to env file
  // let url = mapQueryParams(prevUrl, data);
  const resp = await fetch(url);
  if (resp) {
    const jsonResp = await resp.json();
    return { data: jsonResp, isSuccess: true };
  }
  return {
    isSuccess: false,
  };
};

export const getSearchedMoviesService = async (data) => {
  let prevUrl = `https://api.themoviedb.org/3/search/movie?api_key=2bf70ba6e5e262fad875b833fe8b5d26`; // remove apiKey from here and move to env file
  let url = mapQueryParams(prevUrl, data);
  const resp = await fetch(url);
  if (resp) {
    const jsonResp = await resp.json();
    return { data: jsonResp, isSuccess: true };
  }
  return {
    isSuccess: false,
  };
};
