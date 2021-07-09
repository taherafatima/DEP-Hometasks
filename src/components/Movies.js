import NoFilmsFound from "./NoFilmsFound";
import MoviesDisplay from "./MoviesDisplay";
import { useSelector } from "react-redux";

function Movies() {
  const movieList = useSelector((state) => state.movieList);
  console.log("Movie list" + movieList);
  if (movieList.length === 0) {
    return (
      <div>
        <NoFilmsFound />
      </div>
    );
  } else {
    const movies = movieList.map((movieDetails) => {
      return <MoviesDisplay key={movieDetails.id} movieDetails={movieDetails}  />
    });
    return <div className="movies-display-template">{movies}</div>;
  }
}

export default Movies;
