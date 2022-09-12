import { RequestHandler } from "express";
import { ftxClient } from "../utils/ftxClient";

export const fetchWallet: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).json(ftxClient);
  } catch (error) {
    next(error);
  }
};
