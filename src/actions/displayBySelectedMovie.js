import getMovieById from './getMovieById';

const displayBySelectedMovie = (movieList, movieId) => {
    console.log("Movie id" + movieId + "type " + typeof movieId);

    const movieDetails = getMovieById(movieList, movieId);
    return {
        type: 'MOVIE_DETAILS',
        payload: movieDetails
    }
}

export default displayBySelectedMovie;