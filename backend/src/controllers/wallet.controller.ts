import { RequestHandler } from "express";
import axios from "axios";
import config from "config";
import { paths, urls } from "../utils/constants";
import { generateSignature, timestamp } from "../utils/helpers";

const api_key = config.get<string>("API_KEY");

export const fetchWallet: RequestHandler = async (req, res, next) => {
  try {
    const ftxSignature = generateSignature("GET", paths.walletPath);

    const apiUrl = `${urls.ftxUri}${paths.walletPath}`;

    const response = await axios.get(apiUrl, {
      headers: {
        "FTX-KEY": api_key,
        "FTX-TS": timestamp,
        "FTX-SIGN": ftxSignature,
      },
    });

    // Currently, sending the response to the browser but later on, the data will be saved in the db.
    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};

export const fetchWalletBalances: RequestHandler = async (req, res, next) => {
  try {
    const ftxSignature = generateSignature("GET", paths.walletBalancePath);

    const apiUrl = `${urls.ftxUri}${paths.walletBalancePath}`;

    const response = await axios.get(apiUrl, {
      headers: {
        "FTX-KEY": api_key,
        "FTX-TS": timestamp,
        "FTX-SIGN": ftxSignature,
      },
    });

    // Currently, sending the response to the browser but later on, the data will be saved in the db.
    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};
