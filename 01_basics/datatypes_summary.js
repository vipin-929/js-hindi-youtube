// two types of data categorization
// 1. primitives
// 2. non-primitives
// two types you an call the data 
// call by value or call by refrence

// #Primitive datatype
// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt


const studentName = "Atharv Singh Rawat";
const studentId = 27485;
let isUserLogin = true;
const roomTemp = null;
const healthStatus = undefined;
const empId = Symbol("0060");
const nextEmpId = Symbol("0060");
const bigNumber = 784585233589541223n;

//console.log(typeof studentName); //datatype came string
//console.log(typeof studentId); //datatype came number
//console.log(typeof isUserLogin); //datatype came boolean
//console.log(typeof roomTemp); //datatype came object
//console.log(typeof healthStatus); //datatype came undefined
//console.log(typeof empId); //datatype came symbol
//console.log(typeof nextEmpId); //datatype came symbol
//console.log(typeof bigNumber); //datatype came bigint


//refrence type (Non Primitive)
// Array, Objects, Funtions

let array1 = ["shaktiman","naagraj","super commando dhuruv"];

let myObj = {name: "vipin rawat", age: 40, height: 7.4};

let myFunction = function() {
    console.log("Hello world");
}

//++++++++++++++++++++Memories discussion+++++++++++++++++++++++++++++

// Stack memory and Heap memory

let youtubeName = "vipinrawatkitchen";
let anotherYoutubeName = "youtubeName";
anotherYoutubeName = "vipinrawatexplorer";

console.log(youtubeName);
console.log(anotherYoutubeName);

let youtuberDetails = {
    name: "vipin rawat",
    age: 40,
    profession: "IT manager"
}

let youtuberDetails1 = youtuberDetails;
youtuberDetails1.name = "Monika Rawat";

console.log(youtuberDetails.name);
console.log(youtuberDetails1.name);

