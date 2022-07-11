"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.default = (query) => requestor.get(query);
const requestor = axios_1.default.create({
    baseURL: "https://catalog.sunywcc.edu/search_advanced.php?",
});
