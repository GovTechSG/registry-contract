import * as cors from "@koa/cors";
import * as Koa from "koa";
import * as BodyParser from "koa-body";
import * as yargs from "yargs";

import routerMiddleware from "./middlewares/router";

const args = yargs
  .usage(
    "Starts a HTTP gateway to the Registry smart contract. ABI should be in ../build/contracts/Registry.json, or passed in using --abiPath"
  )
  .version("0.0.1")
  .option("endpoint", {
    default: "http://127.0.0.1:8545",
    describe: "Ethereum HTTP RPC endpoint"
  })
  .option("agent", {
    describe:
      "account to pay for transactions from [default: first account on network]"
  })
  .option("networkId", {
    describe: "Ethereum network ID [default: last in JSON ABI]"
  })
  .option("contractAddress", {
    describe:
      "Address of deployed Registry contract on Ethereum network [default: last in JSON ABI]"
  }).argv;

const app = new Koa();
const router = routerMiddleware(args);

app
  .use(cors())
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
