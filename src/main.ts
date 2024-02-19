let stringArr = ["one", "hey", "Dave"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

// stringArr[0] = 42; /// Type 'number' is not assignable to type 'string'
stringArr[0] = "John";

guitars[0] = 1984;

guitars = stringArr;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple

let myTuple: [string, number, boolean] = ["Dave", 42, true];
myTuple[1] = 43;
// myTuple[2] = 44; // Type 'number' is not assignable to type 'boolean'.

////////////////// Objects
