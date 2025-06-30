// function declaration
function sayHello(): void {
  console.log("Hello");
}

function greet(msg: string, name: string): string {
  return `${msg} ${name}`;
}

const greetRahul = greet("Welcome", "Rahul");
console.log(greetRahul);

// normal function with type
type SubstractFunc = (a: number, b: number) => void;

const substraction: SubstractFunc = function (a, b) {
  console.log(a - b);
};

// arrow functions
const addition = (a: number, b: number): number => {
  return a + b;
};

console.log(addition(5, 3));

// arrow function with type and pass object as parameter
interface Laptop {
  company: string;
  model: string;
  ram: number;
}

let dellLaptop: Laptop = {
  company: "Dell",
  model: "Inspiron 7000",
  ram: 8,
};

type GetLaptopDetailsFunc = (obj: Laptop) => void;

const getLaptopDetails: GetLaptopDetailsFunc = (obj) => {
  console.log(`Laptop is ${obj.company} and model is ${obj.model} `);
};

getLaptopDetails(dellLaptop);

// function overloading

// overloading signature
function calculate(a: number, b: number): number;
function calculate(a: string, b: string): string;
function calculate(a: string, b: number): string;
function calculate(a: number, b: string): string;

// function actual implementation
function calculate(a: unknown, b: unknown): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "string") {
    return a + b;
  } else {
    return "please pass valid type inputs";
  }
}

console.log(calculate(10, 20));
console.log(calculate("5", "10"));
console.log(calculate("10", 5));
console.log(calculate(7, "5"));
