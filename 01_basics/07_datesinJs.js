//Date
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// const myPersonalDate = new Date(24, 4, 25);
// const myPersonalDate = new Date(2024, 4, 25, 5, 3);
const myPersonalDate = new Date("2024-10-05");
// console.log(myPersonalDate.toLocaleString());

const myTime = Date.now();
// console.log(myTime.toString());

console.log(Math.floor(Date.now()/1000))

const newDate = new Date();
console.log(newDate.getMonth())
