async function getViewCount(videoId) {
  var URL =
    "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" +
    videoId +
    "&key=" +
    API_KEY;
  var data = await getURLData(URL);
  return data.items[0].statistics.viewCount;
}
