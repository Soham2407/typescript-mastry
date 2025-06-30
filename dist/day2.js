"use strict";
// Enum
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "Admin";
    UserRole["EDITOR"] = "Editor";
    UserRole["VIEWER"] = "Viewer";
})(UserRole || (UserRole = {}));
function isEdit(role) {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
}
console.log(isEdit(UserRole.EDITOR));
console.log(isEdit(UserRole.VIEWER));
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["South"] = 1] = "South";
    Directions[Directions["East"] = 2] = "East";
    Directions[Directions["West"] = 3] = "West";
})(Directions || (Directions = {}));
function getDirection(direction) {
    let dir;
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
let x;
x = 10;
x = "xyz";
// unknown typw
let y;
y = 30;
y = "hey";
if (typeof y === "string") {
    console.log(y.toUpperCase());
}
// void type
function simple() {
    console.log("simple function not return anything!!");
}
simple();
// never type
function getError() {
    throw new Error("Never means - function never finishes, due to error, here all execution stops");
}
function worldEnd() {
    // infinite loop
    while (true) {
        console.log("PC Died");
    }
}
let userId = 1;
userId = "12";
let currentStatus = "pending";
const add = function (a, b) {
    return a + b;
};
add(2, 4);
const book1 = {
    title: "the secret",
    author: "Ronda Byres",
};
const book2 = {
    title: "The Ninja",
    author: "xyz",
    genre: "action",
};
function bookInfo(book) {
    console.log(`Book name is ${book.title} & author is ${book.author}`);
}
bookInfo(book1);
const benz = {
    model: "Mercedi",
    seats: 5,
    makeYear: 2024,
    fuelType: "Diesel",
};
const carInfo = function (car) {
    console.log(`Model - ${car.model}\nMake Year - ${car.makeYear}\nSeats - ${car.seats}`);
};
carInfo(benz);
