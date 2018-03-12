import * as Router from "koa-router";

import { EthAdapter } from "../adapters/eth";
import jwt from "./jwt";

let adapter = new EthAdapter({
  endpoint: "http://127.0.0.1:8545"
});

const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = `
    * GET /hash/:hash
    * POST /hash
        { hash: string, owner: string }
  `;
});

router.post("/hash", jwt, (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  ctx.set("Access-Control-Allow-Origin", "*");

  if (!ctx.request.body || !ctx.request.body.hash || !ctx.request.body.owner) {
    ctx.status = 400;
    ctx.body = JSON.stringify({
      message:
        "Bad or missing request body, or missing required property in body JSON",
      status: "error"
    });
    return;
  }

  return adapter
    .register(ctx.request.body.hash, ctx.request.body.owner)
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

router.get("/hash/:hash", (ctx, next) => {
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

      const [meta, owner, storedHash] = res;

      if (owner == null || owner === "") {
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
            owner
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
  }
  return router;
};