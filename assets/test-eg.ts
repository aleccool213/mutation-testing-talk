const add2 = (baseNumber) => {
  return baseNumber + 2;
};

describe("Demo", () => {
  it("should make sure math is working", () => {
    const lol = 2;
    expect(add2(lol)).toEqual(4);
  });
});
