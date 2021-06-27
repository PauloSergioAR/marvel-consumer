const { getAuthParams } = require("../src/util");

describe("Utils module", () => {
  test("Should return hash for authentication", () => {
    let authParams = getAuthParams();
    expect(authParams).toContain("ts");
    expect(authParams).toContain("apikey");
    expect(authParams).toContain("hash");
  });
});
