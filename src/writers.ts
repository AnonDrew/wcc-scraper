import { writeFile } from "fs";
import { stringify } from "csv-stringify";
import { Course } from "./Course";

const genFileName = "catalog";

export const writeJSON = (courses: Course[]) => writeFile(genFileName + ".json", JSON.stringify(courses, undefined, 1), () => {});
export const writeCSV = (data: Course[]) => stringify(data, { header: true }, (undefined, output) => writeFile(genFileName + ".csv", output, () => {}));