"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const requests_1 = require("./requests");
const parsers_1 = require("./parsers");
const writers_1 = require("./writers");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.argv[4] === undefined || (process.argv[2] !== "csv" && process.argv[2] !== "json")) {
            console.log("Bad args!");
            process.exit(1);
        }
        const queryURL = (0, parsers_1.parseURL)(process.argv[4]), pages = parseInt(process.argv[3]);
        let courses = [];
        for (let page = 1; page <= pages; ++page) {
            const response = yield (0, requests_1.fetchCatalogPage)(queryURL[0] + page.toString() + queryURL[1]);
            courses = courses.concat(yield (0, parsers_1.parseResponse)(response));
        }
        const format = process.argv[2];
        if (format === "json") {
            (0, writers_1.writeJSON)(courses);
        }
        else if (format === "csv") {
            (0, writers_1.writeCSV)(courses);
        }
    });
}
main();
