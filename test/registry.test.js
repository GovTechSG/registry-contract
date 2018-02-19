const assertRevert = require("./helpers/assertRevert").default;

const Registry = artifacts.require("Registry");

const empty = "0x0000000000000000000000000000000000000000";

contract("Registry", accounts => {
  describe("constructor", () => {
    it("set a default fee", async () => {
      const registry = await Registry.new(1337);
      const fee = await registry.getFee();
      assert.equal(fee, 1337);
    });

    it("sets the sender as a default admin", async () => {
      const sender = accounts[0];
      const registry = await Registry.new(0);
      const admin = await registry.admins(sender);
      assert(admin[0], sender);
    });
  });

  describe("registration", async () => {
    it("registers an retrieves a subject", async () => {
      const registry = await Registry.new(0);
      const subject = "foobar";
      const retrievedEmpty = await registry.retrieve(subject);
      assert.equal(retrievedEmpty[1], empty);

      // Get hashed subject for testing
      const receipt = await registry.register.call(subject, { value: 10 });
      const subjectHash = receipt[1];
      // Commit transaction
      await registry.register(subject, { value: 10 });

      const retrievedSomething = await registry.retrieve(subject);

      assert.equal(retrievedSomething[1], accounts[0]);
      assert.equal(retrievedSomething[2], subjectHash);
    });

    it("forbids duplicate registrations", async () => {
      const registry = await Registry.new(0);

      const subject = "highlander";

      await registry.register(subject, { value: 10 });
      assertRevert(registry.register(subject, { value: 10 }));
    });
  });
});
