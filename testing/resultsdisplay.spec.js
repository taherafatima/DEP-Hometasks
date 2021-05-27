describe("Script should return", () => {
  const videoData = [
    {
      kind: "youtube#searchResult",
      etag: "Xw9oiIbPmIWheNGcKPvt5XYe9kQ",
      id: {
        kind: "youtube#video",
        videoId: "eIrMbAQSU34",
      },
      snippet: {
        publishedAt: "2019-07-15T16:00:12Z",
        channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
        title: "Java Tutorial for Beginners [2020]",
        description:
          "⭐️ Want to learn more from me? Check out these links: Courses: https://codewithmosh.com Twitter: https://twitter.com/moshhamedani Facebook: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/eIrMbAQSU34/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/eIrMbAQSU34/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/eIrMbAQSU34/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Programming with Mosh",
        liveBroadcastContent: "none",
        publishTime: "2019-07-15T16:00:12Z",
      },
    },
  ];

  beforeEach(() => {
    var parser = new DOMParser();
    var str = __html__["index.html"];
    var doc = parser.parseFromString(str, "text/html");
    document.body.innerHTML = doc.body.innerHTML;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("append videos data to the document", async () => {
    await getResults(videoData);

    expect(document.getElementById("load-result")).toBeDefined();
    expect(document.getElementById("thumbnail").src).toBe(
      videoData[0].snippet.thumbnails.medium.url
    );
    expect(document.getElementById("video-preview").src).toBe(
      "http://www.youtube.com/embed/" +
        videoData[0].id.videoId +
        "?autoplay=1&mute=1&controls=0"
    );
    expect(document.getElementById("video-link").href).toBe(
      "http://www.youtube.com/watch?v=" + videoData[0].id.videoId
    );
    expect(document.getElementById("video-title").innerHTML).toBe(
      videoData[0].snippet.title
    );
    expect(document.getElementById("channel-title").innerHTML).toBe(
      videoData[0].snippet.channelTitle
    );
    expect(document.getElementById("date-published").innerHTML).toBe(
      videoData[0].snippet.publishedAt
    );
    expect(document.getElementById("description").innerHTML).toBe(
      videoData[0].snippet.description
    );
  });

  it("on mouse hover replace thumbnail with video preview and on mouse leave replace the video preview to thumbnail", async () => {
    await getResults(videoData);

    document
      .getElementById("video-details")
      .dispatchEvent(new Event("mouseenter"));
    expect(document.getElementById("thumbnail").style.display).toBe("none");
    expect(document.getElementById("video-preview").style.display).toBe(
      "block"
    );

    document
      .getElementById("video-details")
      .dispatchEvent(new Event("mouseleave"));
    expect(document.getElementById("thumbnail").style.display).toBe("block");
    expect(document.getElementById("video-preview").style.display).toBe("none");
  });
});
