// Enum
enum UserRole {
  ADMIN = "Admin",
  EDITOR = "Editor",
  VIEWER = "Viewer",
}

function isEdit(role: UserRole): boolean {
  return role === UserRole.ADMIN || role === UserRole.EDITOR;
}

console.log(isEdit(UserRole.EDITOR));
console.log(isEdit(UserRole.VIEWER));

enum Directions {
  North,
  South,
  East,
  West,
}

function getDirection(direction: Directions): void {
  let dir: string;

  switch (direction) {
    case Directions.East:
      dir = "East";
      break;

    case Directions.West:
      dir = "West";
      break;

    case Directions.North:
      dir = "North";
      break;

    case Directions.South:
      dir = "South";
      break;

    default:
      dir = "Please provide correct direction";
  }

  console.log(dir);
}

getDirection(Directions.South);
getDirection(Directions.West);

// any type
let x: any;
x = 10;
x = "xyz";

// unknown typw
let y: unknown;
y = 30;
y = "hey";

if (typeof y === "string") {
  console.log(y.toUpperCase());
}

// void type
function simple(): void {
  console.log("simple function not return anything!!");
}
simple();

// never type
function getError(): never {
  throw new Error(
    "Never means - function never finishes, due to error, here all execution stops"
  );
}

function worldEnd(): never {
  // infinite loop
  while (true) {
    console.log("PC Died");
  }
}

// Type Alias with Unions
// example 1
type UserId = string | number;

let userId: UserId = 1;
userId = "12";

// example 2
type Status = "pending" | "approved" | "rejected";

let currentStatus: Status = "pending";

// example 3
type Calc = (a: number, b: number) => number;

const add: Calc = function (a, b) {
  return a + b;
};

add(2, 4);

// Type alias with intersections
type User = {
  username: string;
  email: string;
};

type Admin = {
  roles: string;
  permission: string[];
};

type SuperUser = User & Admin;

// Interface
interface Book {
  title: string;
  author: string;
  genre?: string;
}

const book1: Book = {
  title: "the secret",
  author: "Ronda Byres",
};

const book2: Book = {
  title: "The Ninja",
  author: "xyz",
  genre: "action",
};

function bookInfo(book: Book): void {
  console.log(`Book name is ${book.title} & author is ${book.author}`);
}

bookInfo(book1);

// Extending Interface
interface Vehicle {
  model: string;
  makeYear: number;
}

interface Car extends Vehicle {
  seats: number;
  fuelType: string;
}

const benz: Car = {
  model: "Mercedi",
  seats: 5,
  makeYear: 2024,
  fuelType: "Diesel",
};

const carInfo = function (car: Car): void {
  console.log(
    `Model - ${car.model}\nMake Year - ${car.makeYear}\nSeats - ${car.seats}`
  );
};

carInfo(benz);
