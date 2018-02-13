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

  describe("users", async () => {
    it("signs a user up", async () => {
      const registry = await Registry.new(0);
      const sender = accounts[1];
      assert.equal(await registry.users(sender), empty);

      await registry.signup.sendTransaction({ from: sender });

      assert.equal(await registry.users(sender), sender);
    });
  });

  describe("registration", async () => {
    it("registers an retrieves a subject", async () => {
      const registry = await Registry.new(0);
      await registry.signup();
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
  });
});