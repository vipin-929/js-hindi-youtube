//singleton
//Object.create  this called consructor method ke through object declare karna isko hi singleton boltey hai

//object literals

const mySym = Symbol("key1");
const jsUser = {
    name: "Vipin Rawat",
    [mySym]: "myKey1",
    age: 40,
    location: "Ghaziabad",
    email: "vipin@apple.com",
    isLogged: false,
lastLoginIn: ["Monday", "Friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.greeting = function() {
    console.log("Hello world");
}

console.log(jsUser.greeting());


