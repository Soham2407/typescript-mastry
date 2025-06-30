"use strict";
// function declaration
function sayHello() {
    console.log("Hello");
}
function greet(msg, name) {
    return `${msg} ${name}`;
}
const greetRahul = greet("Welcome", "Rahul");
console.log(greetRahul);
const substraction = function (a, b) {
    console.log(a - b);
};
// arrow functions
const addition = (a, b) => {
    return a + b;
};
console.log(addition(5, 3));
let dellLaptop = {
    company: "Dell",
    model: "Inspiron 7000",
    ram: 8,
};
const getLaptopDetails = (obj) => {
    console.log(`Laptop is ${obj.company} and model is ${obj.model} `);
};
getLaptopDetails(dellLaptop);
// function actual implementation
function calculate(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "string") {
        return a + b;
    }
    else {
        return "please pass valid type inputs";
    }
}
console.log(calculate(10, 20));
console.log(calculate("5", "10"));
console.log(calculate("10", 5));
console.log(calculate(7, "5"));
