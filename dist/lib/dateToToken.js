"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToToken = void 0;
const alphabet_json_1 = __importDefault(require("../resources/alphabet.json"));
const dateToToken = (date) => {
    let array = date
        .toISOString()
        .replace(/[^0-9]/g, "")
        .split("");
    const initialLength = array.length;
    for (let i = 0; i < array.length; i++) {
        if (i === initialLength)
            array.push(".");
        if (Math.round(Math.random() * 10) === 3) {
            array.push(alphabet_json_1.default[Math.round(Math.random() * 27)]);
        }
        else if (Math.round(Math.random() * 2) === 1) {
            array.push(i.toString());
        }
    }
    return array.join("");
};
exports.dateToToken = dateToToken;
