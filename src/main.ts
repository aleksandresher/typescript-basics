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

let myObj: object;
myObj = [];
console.log(typeof myObj); // object
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

// exampleObj.prop2 = 42; // Type 'number' is not assignable to type 'boolean'.
exampleObj.prop1 = "John";

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

//   evh.years = 40; // Property 'years' does not exist on type 'Guitarist'.

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name}`;
  }
  return "Hello!";
};
console.log(greetGuitarist(evh)); // Hello Eddie
