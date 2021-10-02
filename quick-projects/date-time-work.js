var moment = require("moment"); // require
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var addDays = moment().add(30, 'days').calendar(); 
var subDays = moment().subtract(10, 'days').calendar()  
console.log(today);
console.log(addDays);
console.log(subDays);