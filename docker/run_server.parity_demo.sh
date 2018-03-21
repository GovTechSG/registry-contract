#!/usr/bin/env bash

set -euo pipefail

echo "Sleeping for a while..."
sleep 5s
yarn truffle deploy --network parity_demo
yarn --silent cli contract getaddress --network parity_demo > /tmp/address
yarn --silent cli account getaccount --network parity_demo > /tmp/account
echo "Address $(tail -1 /tmp/address)"
node /usr/src/app/gateway/build --networkId 0x4242 --endpoint "http://10.7.32.156:8545" --contractAddress $(tail -1 /tmp/address) --agent $(tail -1 /tmp/account)
