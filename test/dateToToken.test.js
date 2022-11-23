const { expect } = require("chai");
const { dateToToken } = require("../dist/lib/index");

describe("dateToToken function test", () => {
  it("default test", () => {
    const result = dateToToken(new Date());
    expect(result).to.be.a("string");
  });
});
