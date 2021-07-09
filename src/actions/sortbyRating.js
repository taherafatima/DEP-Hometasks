const sortbyRating = (movieList) => {
    const sortedList = sortListbyRating(movieList);
    return {
        type: "SORTBY_RATING",
        payload: sortedList
    }
}

function sortListbyRating(movieList) {
    movieList.sort((a, b) => {
        if(b['vote_average'] > a['vote_average']) {
            return 1;
        } else if(a['vote_average'] > b['vote_average']){
            return -1;
        } else {
            return 0;
        }
    })
    return [].concat(movieList);   
}

export default sortbyRating;