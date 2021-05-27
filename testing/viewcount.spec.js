describe("Must return expected JSON object from API call", () => {
  it("View count of the videos should be retrieved from the statistics part", async () => {
    let videosObject = {
      kind: "youtube#videoListResponse",
      etag: "tn9IfmBbMRklIS6GodYbrK6iWkY",
      items: [
        {
          kind: "youtube#video",
          etag: "SA0rDjAk2-lTKeoVDTv874aJRmA",
          id: "eIrMbAQSU34",
          statistics: {
            viewCount: "4239943",
            likeCount: "115998",
            dislikeCount: "1298",
            favoriteCount: "0",
            commentCount: "6372",
          },
        },
      ],
      pageInfo: {
        totalResults: 1,
        resultsPerPage: 1,
      },
    };

    let id = "";

    var viewCountexpected = videosObject.items[0].statistics.viewCount;

    spyOn(window, "getURLData").and.returnValue(videosObject);

    var viewCountactual = await getViewCount(id);

    console.log(viewCountactual);

    expect(viewCountactual).toBe(viewCountexpected);
  });
});
