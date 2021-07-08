import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MovieListHeader() {
  let movieDetails = useSelector((state) => state.movieDetails);

  return (
    <div className="single-movie-display">
      <div className="bg-image">
        <div className="search-content-inner">
        <div className="display-netflixtext netfilxtext-searchicon">
        <div className="netflix-text inline-text-icon">
          <b>netflix</b>roulette
        </div>
        <Link to="/">
          <div className="arrange-icon inline-text-icon">
            <p
              className="search-icon"
            >
              <i className="search-icon"></i>
            </p>
          </div>
        </Link>
      </div>
      <div className="displaysingle-movie-onclick">
        <div>
          <img
            className="singlemovie-poster"
            src={movieDetails.poster_path} alt="movie-image"
          ></img>
        </div>
        <div className="singlemovie-details">
          <div className="movie-title-rating">
            <h1 className="movie-title">{movieDetails.title}</h1>
            <div className="arrange-rating">
              <p className="movie-rating">{movieDetails.vote_average}</p>
            </div>
          </div>
          <p className="movie-releasedate">
            <span>{movieDetails.release_date.slice(0, 4)} </span> year
          </p>
          <p className="movie-duration">
            <span>{movieDetails.runtime} </span> min
          </p>
          <p className="movie-overview">{movieDetails.overview}</p>
        </div>
      </div>
        </div>
      </div>
      
    </div>
  );
}

export default MovieListHeader;
