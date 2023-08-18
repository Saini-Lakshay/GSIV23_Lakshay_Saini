import { get } from "lodash";
import React from "react";
import { imageURL } from "../../constants";

const MovieCard = (props) => {
  return (
    <div
      className="w-full rounded-md shadow-xl overflow-hidden hover:scale-105 cursor-pointer"
      onClick={() =>
        props.handleClick && props.handleClick(get(props, "id", ""))
      }
    >
      <div className="h-[300px]">
        <img
          src={`${imageURL}${get(props, "poster_path", "")}`}
          alt="movieImg"
          className="h-full w-full object-fill"
        />
      </div>
      <div className="my-2 mx-2">
        <section className="flex justify-between items-center">
          <p className="font-bold text-ellipsis overflow-hidden whitespace-nowrap mr-5 text-grey">
            {get(props, "title", "")}
          </p>
          <p className="text-grey">{get(props, "vote_average", "")}</p>
        </section>
        <section className="text-left mt-2">
          <p className="multiline-ellipsis text-grey">
            {get(props, "overview", "")}
          </p>
        </section>
      </div>
    </div>
  );
};

export default MovieCard;
