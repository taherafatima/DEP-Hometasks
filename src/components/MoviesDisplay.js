import displayBySelectedMovie from "../actions/displayBySelectedMovie";
import getMovieById from "../actions/getMovieById";
import moviesfetch from "../actions/fetchMoviesList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import React from "react";
import { Link } from "react-router-dom";

function MoviesDisplay(props) {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  console.log(props.movieDetails);
  return (
    <div className="template">
      <Link to={`/film/${props.movieDetails.id}`}>
        <img
          className="movie-poster-template"
          id={props.movieDetails.id}
          src={props.movieDetails.poster_path}
          onClick={(event) => {
            const movieId = parseInt(event.target.id);
            const movieDetails = getMovieById(movieList, movieId);
            dispatch(displayBySelectedMovie(movieList, movieId));
            dispatch(moviesfetch(movieDetails.genres[0], "genres"));
            
          }}
        ></img>
      
      </Link>

      <p className="movie-title-template">{props.movieDetails.title}</p>
      <div className="arrange-year">
        <p className="release-year-template">
          {props.movieDetails.release_date.slice(0, 4)}
        </p>
      </div>

      <p className="genres-template">{props.movieDetails.genres.join("&")}</p>
    </div>
  );
}

export default MoviesDisplay;