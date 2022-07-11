import { AxiosResponse } from "axios";
import { generateCSV } from "./formatter";
import * as parsers from "./parsers";
import fetchCatalogPage from "./requests";

async function main() {
    const queryURL: string[] = parsers.parseURL(process.argv[3]), pages: number = parseInt(process.argv[2]);

    let courses: string[] = [];

    for (let page: number = 1; page <= pages; ++page) {
        const response: AxiosResponse<any, any> = await fetchCatalogPage(queryURL[0] + page.toString() + queryURL[1]);

        courses = courses.concat(await parsers.parseResponse(response));
    }

    generateCSV(courses);
}

main();