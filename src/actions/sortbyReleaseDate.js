const sortbyReleasedate = (movieList) => {
    const sortedList = sortListbyReleasedate(movieList);
    return {
        type: 'SORTBY_RELEASEDATE',
        payload: sortedList
    }
}

function sortListbyReleasedate(movieList) {
    movieList.sort((a,b) => {
        return parseInt(b['release_date'].slice(0,4))-parseInt(a['release_date'].slice(0,4));
    })
    return [].concat(movieList);
}

export default sortbyReleasedate;