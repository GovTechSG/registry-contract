import * as koaJwt from "koa-jwt";

const jwt = koaJwt({
  secret: "DO_NOT_USE_A_SHARED_SECRET" // Should not be hardcoded
});

export default jwt;
