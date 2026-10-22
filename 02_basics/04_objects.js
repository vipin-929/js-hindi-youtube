const tinderUser = new Object();
const tinderUser1 = {};

// console.log(tinderUser);
// console.log(tinderUser1);

tinderUser.id = "abc123"; 
tinderUser.name = "Vipin Rawat"; 
tinderUser.isLoggedIn = false; 


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Vipin",
            lastName: "Rawat"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);
// ? this is used for the condition if the value exist or not

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};
//  const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2, ...obj4};
//  console.log(obj3);

 const user = [
    {
        name: "Monika",
        email: "monika@gmail.com"
    },
    {
        name: "Monikar",
        email: "monikar@gmail.com"
    },
    {
        name: "Monikad",
        email: "monikad@gmail.com"
    }
 ]

//  console.log(user[1].email);
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty("isLogged"));
 

  