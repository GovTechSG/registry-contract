#!/usr/bin/env bash

set -euo pipefail

echo "Sleeping for a while..."
sleep 5s
yarn truffle deploy --network parity_demo
yarn --silent cli contract getaddress --network docker > /tmp/address
echo "Address $(tail -1 /tmp/address)"
node /usr/src/app/gateway/build --networkId "0x4242" --endpoint "10.7.32.156" --contractAddress $(tail -1 /tmp/address)
