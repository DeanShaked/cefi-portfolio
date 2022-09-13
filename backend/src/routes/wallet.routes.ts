import { Router } from "express";
import {
  fetchWallet,
  fetchWalletBalances,
} from "../controllers/wallet.controller";

const route = Router();

/** Wallet API Routes
 * @URL http://localhost:8000/wallet
 * @Method GET
 * @Desc Fetch user's wallet
 * @Security Private
 */
route.get("/balances", fetchWalletBalances);
route.get("/", fetchWallet);

export default route;
