describe("Pagination should be done properly", () => {
  beforeEach(() => {
    var parser = new DOMParser();
    var str = __html__["index.html"];
    var doc = parser.parseFromString(str, "text/html");
    document.body.innerHTML = doc.body.innerHTML;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("displaying number of pages according to the data", () => {
    videosonPagination(5);
    expect(document.getElementById('pagination-container').children.length).toBe(2);
  });

  it("navigating through pages", () => {
    spyOn(window, "addEventListenersToPages");

    videosonPagination(3);

    document.getElementById("page1").dispatchEvent(new Event("click"));
    expect(window.currentPage).toBe(1);
  });

  it("should return video index", () => {
    let index = getVideoIndex(2);

    expect(index).toBe(3);
  });
});
