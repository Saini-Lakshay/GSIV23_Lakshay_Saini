import MovieDetail from "../pages/movieDetail";
import MoviesList from "../pages/moviesList";

export const paths = [
  {
    path: "/",
    component: MoviesList,
    isPublic: true, // required if need to authenticate route (via login)
  },
  {
    path: "/movie/:id",
    component: MovieDetail,
    isPublic: true, // required if need to authenticate route (via login)
  },
];
