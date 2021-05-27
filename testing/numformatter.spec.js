describe("number formatter", () => {
  it("should return number with K", () => {
    const actual = numFormatter(2000);

    const expected = "2.0K";

    expect(actual).toMatch(expected);
  });

  it("should return number with M", () => {
    const actual = numFormatter(2000000);

    const expected = "2.0M";

    expect(actual).toMatch(expected);
  });

  it("should return number", () => {
    const actual = numFormatter(100);

    const expected = "100";

    expect(actual).toMatch(expected);
  });
});
