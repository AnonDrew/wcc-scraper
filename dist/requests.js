"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCatalogPage = void 0;
const axios_1 = require("axios");
const fetchCatalogPage = (query) => requestor.get(query);
exports.fetchCatalogPage = fetchCatalogPage;
const requestor = axios_1.default.create({
    baseURL: "https://catalog.sunywcc.edu/search_advanced.php",
});
