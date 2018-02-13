const Registry = artifacts.require("Registry");

contract("Registry", accounts => {
  it("should work", () =>
    Registry.deployed()
      .then(instance => instance.getFee())
      .then(fee => {
        assert.equal(fee, 0);
      }));
});
