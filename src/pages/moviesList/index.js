import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import MovieCard from "../../components/movieCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovies,
  getSearchMovies,
  setSearchKeyword,
} from "../../store/actions/movies";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { applyDebounce } from "../../utils";

const MoviesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allMovies, loader, page, totalPages, totalResult, searchKeyword } =
    useSelector((state) => state.movies);

  useEffect(() => {
    if (!searchKeyword) dispatch(getAllMovies.REQUEST({ page: 1 }));
  }, []);

  const handleCardClick = (movieId) => {
    if (movieId) {
      navigate(`/movie/${movieId}`);
    } else {
      toast.error("No id found!");
    }
  };

  const callSearchMovies = (value) => {
    dispatch(setSearchKeyword.SUCCESS(value));
    if (value) {
      dispatch(getSearchMovies.REQUEST({ query: value }));
    }
    if (!value) {
      dispatch(getAllMovies.REQUEST({ page: 1 }));
    }
  };

  const onSearch = applyDebounce(callSearchMovies, 500);

  return (
    <div>
      <InfiniteScroll
        scrollThreshold={"0px"}
        dataLength={totalResult}
        next={() => {
          if (searchKeyword) {
            // get Searched keyword movies
            dispatch(
              getSearchMovies.REQUEST({
                page: page + 1,
                query: searchKeyword,
              })
            );
          } else {
            // get all movies
            dispatch(getAllMovies.REQUEST({ page: page + 1 }));
          }
        }}
        hasMore={page < totalPages}
        loader={<h4 className="py-10 font-bold">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            {!loader && <b>Yay! You have seen it all</b>}
          </p>
        }
      >
        <Header
          showSearchbar={true}
          searchValue={searchKeyword}
          handleSearch={onSearch}
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
