"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCSV = void 0;
const csv_writer_1 = require("csv-writer");
function generateCSV(courses) {
    let data = [];
    courses.map((element) => {
        const row = element.split("\t");
        data.push({
            prefix: row[0],
            ref_num: row[1],
            course: row[2],
        });
    });
    csv.writeRecords(data);
}
exports.generateCSV = generateCSV;
const csv = (0, csv_writer_1.createObjectCsvWriter)({
    path: "./courses.csv",
    header: [
        { id: "prefix", title: "Prefix" },
        { id: "ref_num", title: "Number" },
        { id: "course", title: "Course" },
    ],
});
