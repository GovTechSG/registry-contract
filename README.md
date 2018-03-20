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

Docker image for testing and running on CI.

    docker-compose up
    docker-compose exec truffle yarn run test:docker
