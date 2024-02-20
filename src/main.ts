// let stringArr = ["one", "hey", "Dave"];

// let guitars = ["Strat", "Les Paul", 5150];

// let mixedData = ["EVH", 1984, true];

// // stringArr[0] = 42; /// Type 'number' is not assignable to type 'string'
// stringArr[0] = "John";

// guitars[0] = 1984;

// guitars = stringArr;

// let test = [];
// let bands: string[] = [];
// bands.push("Van Halen");

// // Tuple

// let myTuple: [string, number, boolean] = ["Dave", 42, true];
// myTuple[1] = 43;
// // myTuple[2] = 44; // Type 'number' is not assignable to type 'boolean'.

// ////////////////// Objects

// let myObj: object;
// myObj = [];
// console.log(typeof myObj); // object
// myObj = bands;
// myObj = {};

// const exampleObj = {
//   prop1: "Dave",
//   prop2: true,
// };

// // exampleObj.prop2 = 42; // Type 'number' is not assignable to type 'boolean'.
// exampleObj.prop1 = "John";

// // type Guitarist = {
// //   name: string;
// //   active?: boolean;
// //   albums: (string | number)[];
// // };

// interface Guitarist {
//   name?: string;
//   active: boolean;
//   albums: (string | number)[];
// }

// let evh: Guitarist = {
//   name: "Eddie",
//   active: false,
//   albums: [1984, 5, "OU812"],
// };

// let jp: Guitarist = {
//   name: "Jimmy",
//   active: true,
//   albums: ["I", "II", "IV"],
// };

// //   evh.years = 40; // Property 'years' does not exist on type 'Guitarist'.

// const greetGuitarist = (guitarist: Guitarist) => {
//   if (guitarist.name) {
//     return `Hello ${guitarist.name}`;
//   }
//   return "Hello!";
// };
// console.log(greetGuitarist(evh)); // Hello Eddie

// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber; Won't work

/// Literal types
let myName: "Aleksandre";

let userName: "Aleksandre" | "John" | "Amy";

userName = "Aleksandre";
// userName = "David"; // Type '"David"' is not assignable to type '"Aleksandre" | "John" | "Amy"'.

///////////////////// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

/// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

/// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

/// Rest Parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));

//// never type

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

/// custom type guard

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happer!");
};
