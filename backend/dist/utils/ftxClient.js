"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ftxClient = void 0;
const ccxt_1 = __importDefault(require("ccxt"));
exports.ftxClient = new ccxt_1.default.ftx({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET
});
