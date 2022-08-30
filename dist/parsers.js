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
exports.parseURL = exports.parseResponse = void 0;
const jsdom_1 = require("jsdom");
function parseResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        const webpage = new jsdom_1.JSDOM(response.data);
        const elements = webpage.window.document.querySelectorAll("a[aria-expanded=\"false\"]");
        const sep = "\t";
        let courses = [];
        for (const a of elements) {
            if (a.textContent !== null) {
                const aCleanUp = a.textContent.replace(" ", sep).replace(String.fromCharCode(160, 45, 160), sep);
                const courseData = aCleanUp.split(sep);
                courses.push({
                    prefix: courseData[0],
                    num: courseData[1],
                    name: courseData[2],
                });
            }
        }
        return courses;
    });
}
exports.parseResponse = parseResponse;
function parseURL(url) {
    url = url.slice(url.indexOf("?"));
    const splitPoint = "page=";
    const parsedURL = [
        url.slice(0, url.indexOf(splitPoint) + splitPoint.length),
        url.slice(url.indexOf(splitPoint) + splitPoint.length + 1),
    ];
    return parsedURL;
}
exports.parseURL = parseURL;
