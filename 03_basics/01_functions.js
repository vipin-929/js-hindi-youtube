// console.log("V");
// console.log("I");
// console.log("P");
// console.log("I");
// console.log("N");

function sayMyName() {
  console.log("V");
  console.log("I");
  console.log("P");
  console.log("I");
  console.log("N");
}

// sayMyName()

// function addTwoNumber(number1 , number2) {
//     console.log(number1 + number2);
// }

// function addTwoNumber(number1 , number2) {
//     let result = number1 + number2;
//     return result;
// }

function addTwoNumber(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumber(14, 78);

// console.log("Result:", result);

function userName(usrName) {
  return `${usrName} is my user name`;
}

const usrName1 = userName("Vipin Singh Rawat");
// console.log(usrName1);

function userLoggedInMessage(userName = "Sunny") {
  // if (userName === undefined) {
  if (!userName) {
    console.log("Please enter the user name");
    return;
  }
  return `${userName} just logged in.`;
}

// console.log(userLoggedInMessage("Vipin Rawat"));
// console.log(userLoggedInMessage(""));
// console.log(userLoggedInMessage("Somaya rani"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 1001, 450, 7854));
// console.log(calculateCartPrice(200, 1001, 450, 7854));

const user = {
  userName: "samiksha",
  price: 600,
};

function handleObject(anyObject) {
  return `user name is ${anyObject.userName} and price is ${anyObject.price}`;
}

// console.log(handleObject(user));
console.log(handleObject({
  userName: "Katrina",
  price: 1000
}));

const newArray = [200, 452, 7458, 5895]
function thirdValueOfArray(unknownArray) {
  return "Fourth value of array is " + unknownArray[3];
}

// console.log(thirdValueOfArray(newArray));
console.log(thirdValueOfArray([200, 452, 7458, 5895]));
