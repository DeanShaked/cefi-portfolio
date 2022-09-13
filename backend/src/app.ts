import config from "config";
import logger from "./utils/logger";
import express from "express";
import wallet_routes from "./routes/wallet.routes";
import cors from "cors";

const PORT = config.get<number>("port");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/wallet", wallet_routes);

app.listen(PORT, async () => {
  logger.info(`Server is running at http://localhost:${PORT}`);
});
