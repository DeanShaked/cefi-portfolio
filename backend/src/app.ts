import config from "config";
import logger from "./utils/logger";
import express from "express";
import { ftxClient } from "./utils/ftxClient";
import ratesRoutes from "./routes/ratesRoutes";

const PORT = config.get<number>("port");

const app = express();

app.use("/rates", ratesRoutes);

app.listen(PORT, async () => {
  logger.info(`Server is running at https://localhost:${PORT}`);
  // console.log("ftxClient", ftxClient);
});
