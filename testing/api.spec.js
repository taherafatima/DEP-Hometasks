describe("Must return expected JSON object from API call", () => {
  it("According to search keyword videos should be retrieved", async () => {
    let videosObject = {
      items: [
        {
          id: {},
          snippet: [],
        },
      ],
    };

    let searchresult = "";

    spyOn(window, "getURLData").and.returnValue(videosObject);

    var data = await getDataFromAPI(searchresult);

    expect(data).toEqual(videosObject.items);
  });
});
