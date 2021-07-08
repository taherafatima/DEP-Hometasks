function getMovieById(movieList, movieId) {
    for(let movie of movieList) {
        if(movie.id === movieId){
            return movie;
        }
    }
    return {};
}

export default getMovieById;