const moviesfetch = (movieName, searchby) => {
    return async function (dispatch) {
      const movieList = await fetchMoviesList(movieName, searchby);
      dispatch({
        type: "MOVIELIST_FETCHER",
        payload: movieList      
      });
    };
  };
  
  async function fetchMoviesList(movieName, searchby) {
    const url =
      "https://reactjs-cdp.herokuapp.com/movies?search=" + movieName + "&searchBy=" + searchby +"&limit=20";
    return (await (await fetch(url)).json()).data;
  }
  
  export default moviesfetch;
  