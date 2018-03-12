# registry-gateway

A ***simple example*** HTTP gateway to the Registry contract. This should not be used in production without significant improvements. The gateway exposes the contract to external clients, and controls access to the contract.

## Usage and development

This example gateway needs access to a node with the Registry contract already deployed.

Start the Ethereum network (eg. Parity or Ganache), and make sure the ABI (`Registry.json`) is available at `../build/contracts/Registry.json`.

Expect TypeScript errors with Web3: tsc complains, but it will still work. Web3 has awful type definitions.

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

## Authentication

As an example, this gateway uses a JWT with a shared secret for the POST endpoint.

Add the `Authorization` header when calling the POST endpoint. Example tokens can be generated at [jwt.io](https://jwt.io), but you should _not_ be using a shared secret in production. The hardcoded shared secret (`DO_NOT_USE_A_SHARED_SECRET`) is in `src/middlewares/jwt.ts`.

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.2YjpwOJwv3SJ32kOeBqki0ee4UardV7SvPehZHW7MXw
```

## Endpoints

### POST `/hash`

Requires an `Authorization` header.

```
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.2YjpwOJwv3SJ32kOeBqki0ee4UardV7SvPehZHW7MXw

{ "hash": "0x...", "owner": "foobar" }
```

#### Success

200 OK

```json
{
  "data": {
    "transactionHash":
      "0xe13dc83f9dfbef0f3135d344a7d0063380d2763d331340126e4cc0f23a812cdb",
    "transactionIndex": 0,
    "blockHash":
      "0x5118221ae2ee0d2a6a1e5259be3c207bd8081243c560c95bdda99fb6ab6a6a11",
    "blockNumber": 30,
    "gasUsed": 76034,
    "cumulativeGasUsed": 76034,
    "contractAddress": null,
    "status": 1,
    "events": {
      ...
    }
  },
  "status": "ok"
}
```

#### Error

400 BAD REQUEST

```json
{
  "message": "Transaction reverted: duplicate hash or bad transaction",
  "status": "error"
}
```

### GET `/hash/:hash:`

```
curl -X GET http://localhost:3000/hash/0x72ba7d8e73fe8eb666ea66babc8116a41bfb10e8
```

#### Success

200 OK

```json
{
  "data": {
    "hash":
      "0xe84204c23cee32faa70ccffe2df4e8623cb87a3058bd216342f84373a4ca325d",
    "meta": "0",
    "owner": "foobar"
  },
  "status": "ok"
}
```

#### Error

404 NOT FOUND

```json
{
  "message": "No such hash found",
  "status": "error"
}
```
