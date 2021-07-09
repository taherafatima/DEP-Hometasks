import React from 'react';
import { useSelector } from "react-redux";

function FilmbyGenre() {
    let movieDetails = useSelector((state) => state.movieDetails);
    console.log("MOVIE Details " +movieDetails);
    return (
        <div className="filmsby-genre">
            <div className="display-genresname">Films by {movieDetails.genres[0]} genre</div>
        </div>
    )
}

export default FilmbyGenre;
