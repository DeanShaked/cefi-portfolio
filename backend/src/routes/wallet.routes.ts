import { Router } from "express";
import { fetchWallet } from "../controllers/wallet.controller";

const route = Router();

/** Wallet API Routes
 * @Url http://localhost:5000/auth/sign-up
 * @Method GET
 * @Desc Fetch user's wallet
 * @Security Private
 */
route.get("/", fetchWallet);

export default route;
