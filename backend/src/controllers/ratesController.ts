import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import { ftxClient } from '../utils/ftxClient';



export const fetchWallet: RequestHandler = async (req, res, next) => {

    try {
        console.log('ftxClient', ftxClient);

    } catch (error) {
        next(error);
    }
}