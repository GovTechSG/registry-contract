import * as Router from "koa-router";

import { EthAdapter } from "../adapters/eth";
import jwt from "./jwt";

let adapter: EthAdapter;

const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = `
# Registry Ethereum Gateway

* Registry contract address: ${adapter.contractAddress}

## Methods

* GET /v1/document/:hash
* POST /v1/document
  { hash: string, userId: string }
  `;
});

router.post("/v1/document", jwt, (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  ctx.set("Access-Control-Allow-Origin", "*");

  if (!ctx.request.body || !ctx.request.body.hash || !ctx.request.body.userId) {
    ctx.status = 400;
    ctx.body = JSON.stringify({
      message:
        "Bad or missing request body, or missing required property in body JSON",
      status: "error"
    });
    return;
  }

  return adapter
    .register(ctx.request.body.hash, ctx.request.body.userId)
    .then(res => {
      // tslint:disable-next-line:no-console
      console.log(res);
      ctx.body = JSON.stringify(
        {
          data: res,
          status: "ok"
        },
        null,
        2
      );
    })
    .catch(err => {
      // tslint:disable-next-line:no-console
      console.error(err);
      if (err.toString().search("revert")) {
        ctx.status = 400;
        ctx.body = JSON.stringify({
          message: "Transaction reverted: duplicate hash or bad transaction",
          status: "error"
        });
      }
    });
});

router.get("/v1/document/:hash", (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  ctx.set("Access-Control-Allow-Origin", "*");

  if (!ctx.params.hash) {
    ctx.status = 400;
    ctx.body = JSON.stringify({
      message: "Missing parameter: hash",
      status: "error"
    });
    return;
  }

  return adapter
    .check(ctx.params.hash)
    .then(res => {
      // tslint:disable-next-line:no-console
      console.log(res);

      const [meta, userId, storedHash] = res;

      if (userId == null || userId === "") {
        ctx.status = 404;
        ctx.body = JSON.stringify({
          message: "No such hash found",
          status: "error"
        });
        return;
      }

      ctx.body = JSON.stringify(
        {
          data: {
            hash: storedHash,
            meta,
            userId
          },
          status: "ok"
        },
        null,
        2
      );
    })
    .catch(err => {
      // tslint:disable-next-line:no-console
      console.error(err);
      ctx.body = JSON.stringify({ message: err, status: "error" });
    });
});

export default args => {
  if (args) {
    adapter = new EthAdapter(args);
  } else {
    adapter = new EthAdapter({
      endpoint: "http://127.0.0.1:8545"
    });
  }
  return router;
};
