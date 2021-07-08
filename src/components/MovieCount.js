import React from 'react';
import { useSelector } from "react-redux";

function MovieCount() {
    const movieList = useSelector((state) => state.movieList);
    return (
        <div className="movie-count">
            <div className="movies-found">{movieList.length} movies found</div>
        </div>
    )
}

export default MovieCount;
