const API_KEY = "AIzaSyCtNxKPLKNhNraBEtXrygP1GKVGaYz5aTE";
var maxResults = 15;

async function getDataFromAPI(searchresult) {
  var URL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" +
    API_KEY +
    "&type=video&maxResults=" +
    maxResults +
    "&q=" +
    searchresult;

  var data = await getURLData(URL);
  console.log(data.items);
  return data.items;
}

async function getURLData(URL) {
  return await (await fetch(URL)).json();
}
