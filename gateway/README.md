# registry-gateway

## Development

Start the Ethereum network (Parity/ganache-cli), and make sure the ABI (`Registry.json`) is available at `../build/contracts/Registry.json`.

```
yarn

yarn build
# or to watch
yarn d

yarn lint

# Run the built server
node build --help
node build
```
