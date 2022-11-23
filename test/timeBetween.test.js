const { expect } = require("chai");
const { getTimeBetween } = require("../dist/lib/index");

describe("timeBetween function test", () => {
  let start = new Date(new Date().getTime() - 1 * 60 * 60 * 1000);
  let finish = new Date();

  it("default test (m)", () => {
    var result = getTimeBetween(start, finish, { output: "m" });
    expect(result).to.equal((finish.getTime() - start.getTime()) / 1000 / 60);
  });
  it("default test (s)", () => {
    var result = getTimeBetween(start, finish);
    expect(result).to.equal((finish.getTime() - start.getTime()) / 1000);
  });
  it("default test (ms)", () => {
    var result = getTimeBetween(start, finish, { output: "ms" });
    expect(result).to.equal(finish.getTime() - start.getTime());
  });
});
