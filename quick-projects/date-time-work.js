var moment = require("moment"); // require
var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var addDays = moment().add(30, "days").calendar();
var subDays = moment().subtract(10, "days").calendar();
var all = moment()
  .add(7, "days")
  .subtract(1, "months")
  .year(2009)
  .hours(0)
  .minutes(0)
  .seconds(0);

console.log(today);
console.log(addDays);
console.log(subDays);
console.log(all);
