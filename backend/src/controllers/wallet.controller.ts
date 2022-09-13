import { RequestHandler } from "express";
import axios from "axios";
import config from "config";
import { paths, urls } from "../utils/constants";
import { signature, timestamp } from "../utils/helpers";

const api_key = config.get<string>("API_KEY");

export const fetchWallet: RequestHandler = async (req, res, next) => {
  try {
    const ftxSignature = signature("GET", "/account");

    const response = await axios.get(`${urls.ftxUri}${paths.accountPath}`, {
      headers: {
        "FTX-KEY": api_key,
        "FTX-TS": timestamp,
        "FTX-SIGN": ftxSignature,
      },
    });

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
