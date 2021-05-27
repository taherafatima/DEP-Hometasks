var currentPage = 1;
var videosPerPage = 3;
var videos = "";

document.getElementById("search-button").addEventListener("click", videoSearch);

async function videoSearch() {
  var searchresult = document.getElementById("search-result").value;
  videos = await getDataFromAPI(searchresult);
  videosonPagination(videos.length);
  var initialVideoIndex = getVideoIndex(currentPage);
  getResults(
    videos.slice(initialVideoIndex, initialVideoIndex + videosPerPage)
  );
}
