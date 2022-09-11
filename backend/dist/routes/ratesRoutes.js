"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ratesController_1 = require("../controllers/ratesController");
const route = (0, express_1.Router)();
route.get('/', ratesController_1.fetchWallet);
