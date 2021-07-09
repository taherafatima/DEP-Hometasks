const movieList = (state = [], action) => {
    console.log("movieList action " + action.type);
    switch(action.type) {
        case "MOVIELIST_FETCHER":
            return action.payload;
        case "SORTBY_RELEASEDATE":
            return action.payload;
        case "SORTBY_RATING":
            return action.payload;
        default:
            return state;
    }
}

export default movieList;