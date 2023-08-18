import React, { useEffect } from "react";
import Header from "../../components/header";
import MovieCard from "../../components/movieCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../store/actions/movies";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MoviesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allMovies, loader, page, totalPages, totalResult } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getAllMovies.REQUEST({ page: 1 }));
  }, []);

  const handleCardClick = (movieId) => {
    if (movieId) {
      navigate(`/movie/${movieId}`);
    } else {
      toast.error("No id found!");
    }
  };

  return (
    <div>
      <InfiniteScroll
        scrollThreshold={"0px"}
        dataLength={totalResult}
        next={() => {
          console.log("Next triggered", page + 1);
          dispatch(getAllMovies.REQUEST({ page: page + 1 }));
        }}
        hasMore={page < totalPages}
        loader={<h4 className="py-10 font-bold">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Header
          showSearchbar={true}
          handleSearch={(val) => {
            console.log(val);
          }}
        />
        <div className="py-5 grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 px-5 h-full">
          {allMovies.map((movie, index) => {
            return (
              <MovieCard key={index} {...movie} handleClick={handleCardClick} />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MoviesList;
