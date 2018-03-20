# registry-contract

[![Build Status](https://travis-ci.org/GovTechSG/registry-contract.svg?branch=master)](https://travis-ci.org/GovTechSG/registry-contract)

Simple registration contract to store hashes on an Ethereum network.

## Testing

Start a test server, and run the tests

```
ganache-cli
yarn test
```

```
yarn lint
```

## Docker image

Docker image for testing and running on CI. `docker-compose up` starts up

* A ganache-cli instance with port `8545` exposed
* A long-running truffle container to run truffle scripts in (for testing)
* A HTTP gateway with port `3000` exposed

```
docker-compose up
docker-compose exec truffle yarn run test:docker
```

## HTTP Gateway

[More details](gateway/README.md)

The HTTP gateway to the underlying Parity network can be found in [gateway](gateway). See [gateway/README.md](gateway/README.md) for more details.
