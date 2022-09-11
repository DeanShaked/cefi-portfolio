
import { Router } from 'express';
import { body } from 'express-validator';
import { fetchWallet } from '../controllers/ratesController';

const route = Router();

route.get('/', fetchWallet);