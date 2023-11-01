import { Router } from "express";

const rootRouterIsReady = Promise.all([]);
const rootRouter = Router();

rootRouter.post("/hello", (req, res) => {
  res.send({ message: `Hello ${req.body.name}!` });
});

export { rootRouter, rootRouterIsReady };
