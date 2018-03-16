#!/usr/bin/env bash

set -euo pipefail

echo "Sleeping for a while..."
sleep 5s
yarn deploy:docker
yarn --silent cli contract getaddress --network docker > /tmp/address
echo "Address $(tail -1 /tmp/address)"
node /usr/src/app/gateway/build --networkId 1337 --endpoint "http://ganache:8545" --contractAddress $(tail -1 /tmp/address)
