// NOTE: This should load before all other imports.
import "./config";

import { rootRouter, rootRouterIsReady } from "./routers";
import express, { json } from "express";
import cors from "cors";

const PORT = process.env.PORT!;
const app = express();

app.use(
  cors({
    origin: "https://zetanote.com",
  })
);

app.get(["/readyz", "/livez"], (_, res) => {
  res.sendStatus(200);
});

app.use(json());

app.use("/api", rootRouter);

app.use("*", (_, res) => {
  res.sendStatus(404);
});

async function startApp() {
  await rootRouterIsReady;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
  });
}

startApp();
