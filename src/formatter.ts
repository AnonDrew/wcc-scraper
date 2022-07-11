import { createObjectCsvWriter } from "csv-writer";
import { CsvWriter } from "csv-writer/src/lib/csv-writer";

export function generateCSV(courses: string[]): void {
    let data: any[] = [];

    courses.map((element: string): void => {
        const row: string[] = element.split("\t");

        data.push({
            prefix: row[0],
            ref_num: row[1],
            course: row[2],
        });
    });

    csv.writeRecords(data);
}

const csv: CsvWriter<any[]> = createObjectCsvWriter({
    path: "./courses.csv",
    header: [
        { id: "prefix", title: "Prefix" },
        { id: "ref_num", title: "Number" },
        { id: "course", title: "Course" },
    ],
});