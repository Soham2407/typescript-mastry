"use strict";
// Basic types
let fName = "John";
let age = 35;
let isMarried = true;
let empty = null;
let a;
let allAccept;
allAccept = 30;
allAccept = "Jack";
// Arrays
let numsArr = [10, 20, 30, 40];
numsArr.push(65); // valid
// numsArr.push('abc') - gives error
// numsArr = ['pqr', 'abc'] - gives error
let strArr = ["john", "peter", "david"];
// tuple - fixed length of array, we have to provide type for each element
let tuple1 = ["Ram", 20];
let tuple2 = [1, "abc", 78];
// tuple2[1] = 22  - error
tuple2.push("pass"); // Default TS Behaviour -  push methods adds different type value to tuple. its not gives any error
// objects
let obj1 = {
    id: 1,
    username: "abc",
    isMarried: false,
};
// obj1.designatiom = 'developer'  - error
console.log(obj1);
let obj2 = {
    id: 20,
    firstName: "john",
    lastName: "doe",
    isMarried: false,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(obj2);
console.log(obj2.getFullName());
console.log(obj2.id);
// obj2.id = 33  - error
obj2.firstName = "Ram";
obj2.lastName = "Kumar";
console.log(obj2.getFullName());
