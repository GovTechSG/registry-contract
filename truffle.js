module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    docker: {
      host: "ganache",
      port: 8545,
      network_id: "1337"
    },
    parity_demo: {
      host: "10.7.32.156",
      port: 8545,
      network_id: 0x4242,
      gas: 6000000
    }
  }
};
