const movieDetails = (state = {}, action) => {
    console.log("movieDetails action " + action.type);
    switch(action.type) {
        case "MOVIE_DETAILS":
            return action.payload;
        default:
            return state;
    }
}

export default movieDetails;