const { expect } = require("chai");
const { toVideoTime } = require("../dist/index");

describe("toVideoTime function test", () => {
  it("full time test", () => {
    var result = toVideoTime(10390, "s");
    expect(result).to.equal("2:53:10");
  });
  it("no hour test (with allowZero)", () => {
    var result = toVideoTime(3190, "s", {
      allowZero: true,
    });
    expect(result).to.equal("0:53:10");
  });
  it("no hour test (without allowZero)", () => {
    var result = toVideoTime(3190, "s");
    expect(result).to.equal("53:10");
  });
  it("less than 10 mins test", () => {
    var result = toVideoTime(7390, "s");
    expect(result).to.equal("2:03:10");
  });
});
