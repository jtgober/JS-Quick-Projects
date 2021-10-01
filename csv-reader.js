const Fs = require("fs");
const CsvReadableStream = require("csv-reader");

let inputStream = Fs.createReadStream("./resources/data.csv", "utf8");

inputStream
  .pipe(new CsvReadableStream({ parseNumbers: true, trim: true }))
  .on("data", function (row) {
    console.log("A row arrived: ", row.toString());
  })
  .on("end", function () {
    console.log("No more rows!");
  });
