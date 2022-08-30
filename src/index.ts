import { AxiosResponse } from "axios";
import { Course } from "./Course";
import { fetchCatalogPage } from "./requests";
import { parseURL, parseResponse } from "./parsers";
import { writeJSON, writeCSV } from "./writers";

async function main() {
    if (process.argv[4] === undefined || (process.argv[2] !== "csv" && process.argv[2] !== "json")) {
        console.log("Bad args!");
        process.exit(1);
    }

    const queryURL: string[] = parseURL(process.argv[4]), pages: number = parseInt(process.argv[3]);
    let courses: Course[] = [];
    for (let page: number = 1; page <= pages; ++page) {
        const response: AxiosResponse<any, any> = await fetchCatalogPage(queryURL[0] + page.toString() + queryURL[1]);

        courses = courses.concat(await parseResponse(response));
    }

    const format: string = process.argv[2];
    if (format === "json") {
        writeJSON(courses);
    }
    else if (format === "csv") {
        writeCSV(courses);
    }
}

main();