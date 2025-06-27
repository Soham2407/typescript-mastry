// Basic types
let fName: string = "John";

let age: number = 35;

let isMarried: boolean = true;

let empty: null = null;

let a: undefined;

let allAccept: any;
allAccept = 30;
allAccept = "Jack";

// Arrays
let numsArr: number[] = [10, 20, 30, 40];
numsArr.push(65); // valid
// numsArr.push('abc') - gives error
// numsArr = ['pqr', 'abc'] - gives error

let strArr: Array<string> = ["john", "peter", "david"];

// tuple - fixed length of array, we have to provide type for each element
let tuple1: [string, number] = ["Ram", 20];
let tuple2: [number, string, number] = [1, "abc", 78];
// tuple2[1] = 22  - error
tuple2.push("pass"); // Default TS Behaviour -  push methods adds different type value to tuple. its not gives any error

// objects
let obj1: {
  id: number;
  username: string;
  isMarried: boolean;
} = {
  id: 1,
  username: "abc",
  isMarried: false,
};

// obj1.designatiom = 'developer'  - error
console.log(obj1);

let obj2: {
  readonly id: number; // readonly property
  firstName: string;
  lastName: string;
  isMarried: boolean;
  getFullName: () => string;
  country?: string; // optional property
} = {
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
