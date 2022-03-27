#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const promises_1 = __importDefault(require("fs/promises"));
const options = commander_1.program.option('--input <value>').option('--var <value>').option('--output <value>').parse().opts();
const filePath = options?.input;
const variableName = options?.var;
const outputFile = options?.output;
if (!filePath)
    throw new Error('no file path provided');
if (!variableName)
    throw new Error('no variable name provided');
if (!outputFile)
    throw new Error('no output file provided');
Promise.resolve().then(() => __importStar(require(filePath))).then((mod) => {
    const v = mod[variableName];
    const vstring = JSON.stringify(v, null, 2);
    promises_1.default.writeFile(outputFile, vstring).catch((err) => {
        console.error(err);
        process.exit(1);
    });
})
    .catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map