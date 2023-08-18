import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneMovie } from "../../store/actions/movies";
import Header from "../../components/header";
import { imageURL } from "../../constants";
import { get } from "lodash";
import { getYearFromdate } from "../../utils";

const MovieDetail = () => {
  // get movie id from params
  const { id } = useParams();

  const dispatch = useDispatch();

  const { selectedMovie, loader } = useSelector((state) => state.movies);

  // get selected movie
  useEffect(() => {
    dispatch(getOneMovie.REQUEST({ id: id }));
  }, [id]);

  return (
    <div>
      {selectedMovie && !loader ? (
        <div>
          <Header title={"Movie Details"} />
          <div className="py-5 px-5">
            <div className="flex flex-col md:flex-row gap-4">
              <section className="w-[50%] md:w-[30%] h-full mx-[auto]">
                <img
                  src={`${imageURL}${get(selectedMovie, "poster_path", "")}`}
                  alt="movieImg"
                  className="h-full w-full object-fill"
                />
              </section>
              <section className="w-full md:w-[70%] text-left">
                <span className="flex">
                  <p className="font-bold text-ellipsis overflow-hidden whitespace-nowrap mr-2 text-grey">
                    {get(selectedMovie, "title", "")}
                  </p>
                  <p className="text-lightGrey">{`(${get(
                    selectedMovie,
                    "vote_average",
                    ""
                  )})`}</p>
                </span>
                <span className="flex mt-2">
                  <p className="text-grey mr-2 truncate">
                    {`${getYearFromdate(
                      get(selectedMovie, "release_date", "")
                    )}`}
                  </p>{" "}
                  |
                  <p className="text-grey mx-2 truncate">{`${get(
                    selectedMovie,
                    "runtime",
                    ""
                  )} minutes`}</p>{" "}
                  |
                  <p className="text-grey ml-2 truncate">
                    {`Director : ${
                      get(selectedMovie, "crew", []).find(
                        (c) => c.known_for_department === "Directing"
                      )?.name
                    }`}
                  </p>
                </span>
                <p className="truncate mt-2 text-grey">{`Cast :${get(
                  selectedMovie,
                  "cast",
                  []
                ).map((c, i) => {
                  return ` ${get(c, "original_name", "")}`;
                })}`}</p>
                <p className="mt-4 text-clip text-grey">{`Description : ${get(
                  selectedMovie,
                  "overview",
                  []
                )}`}</p>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MovieDetail;
