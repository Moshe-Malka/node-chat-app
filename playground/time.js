const moment = require('moment');
var date = moment();


// date.add(1, 'year').subtract(3, 'months');
// console.log(date.format('MMM Do YYYY '));


// 6:05 am
// hours-12h
console.log(date.format('h:mm a'));
