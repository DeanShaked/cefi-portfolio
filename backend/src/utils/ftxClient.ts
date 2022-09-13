import axios from "axios";
import ccxt from "ccxt";

export const ftxClient = new ccxt.ftx({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET,
});
