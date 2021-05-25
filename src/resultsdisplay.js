async function getResults(data) {
  var loadResult = document.getElementById("load-result");
  loadResult.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    var video = document.getElementById("video-template");

    const node = document.importNode(video.content, true);

    var thumbnail = node.getElementById("thumbnail");
    thumbnail.src = data[i].snippet.thumbnails.medium.url;

    var videopreview = node.getElementById("video-preview");
    var previewlink = "http://www.youtube.com/embed/" + data[i].id.videoId;
    videopreview.src = previewlink + "?autoplay=1&mute=1&controls=0";
    videopreview.style.display = "none";

    var link = node.getElementById("video-link");
    var stringlink = "http://www.youtube.com/watch?v=" + data[i].id.videoId;
    link.href = stringlink;

    var videotitle = node.getElementById("video-title");
    videotitle.innerHTML = data[i].snippet.title;

    var channeltitle = node.getElementById("channel-title");
    channeltitle.innerHTML = data[i].snippet.channelTitle;

    var publisheddate = node.getElementById("date-published");
    publisheddate.innerHTML = data[i].snippet.publishedAt;

    var describe = node.getElementById("description");
    describe.innerHTML = data[i].snippet.description;

    var viewCount = node.getElementById("view-count");
    viewCount.innerHTML =
      numFormatter(await getViewCount(data[i].id.videoId)) + " views";

    node
      .getElementById("video-details")
      .addEventListener("mouseenter", function () {
        this.children[0].style.display = "none";
        this.children[1].style.display = "block";
      });

    node
      .getElementById("video-details")
      .addEventListener("mouseleave", function () {
        this.children[0].style.display = "block";
        this.children[1].style.display = "none";
      });

    loadResult.appendChild(node);
  }
}
