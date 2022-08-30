import { writeFile } from "fs";
import { stringify } from "csv-stringify";
import { Course } from "./Course";

const genFileName = "catalog.json";

export const writeJSON = (courses: Course[]) => writeFile(genFileName, JSON.stringify(courses, undefined, 1), () => {});
export const writeCSV = (data: Course[]) => stringify(data, { header: true }, (undefined, output) => writeFile(__dirname + genFileName, output, () => {}));