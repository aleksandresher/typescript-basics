"use strict";
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
// type stringOrNumber = string | number;
// type stringOrNumberArray = (string | number)[];
// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: stringOrNumberArray;
// };
// type UserId = stringOrNumber;
// // interface PostId = stringOrNumber; Won't work
// /// Literal types
// let myName: "Aleksandre";
// let userName: "Aleksandre" | "John" | "Amy";
// userName = "Aleksandre";
// // userName = "David"; // Type '"David"' is not assignable to type '"Aleksandre" | "John" | "Amy"'.
// ///////////////////// Functions
// const add = (a: number, b: number): number => {
//   return a + b;
// };
// const logMsg = (message: any): void => {
//   console.log(message);
// };
// logMsg("Hello");
// logMsg(add(2, 3));
// let subtract = function (c: number, d: number): number {
//   return c - d;
// };
// type mathFunction = (a: number, b: number) => number;
// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };
// logMsg(multiply(2, 2));
// /// optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };
// /// default param value
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//   return a + b + c;
// };
// logMsg(addAll(2, 3, 2));
// logMsg(addAll(2, 3));
// logMsg(sumAll(2, 3));
// logMsg(sumAll(undefined, 3));
// /// Rest Parameters
// const total = (a: number, ...nums: number[]): number => {
//   return a + nums.reduce((prev, curr) => prev + curr);
// };
// logMsg(total(10, 2, 3));
// //// never type
// const createError = (errMsg: string) => {
//   throw new Error(errMsg);
// };
// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     if (i > 100) break;
//   }
// };
// /// custom type guard
// const isNumber = (value: any): boolean => {
//   return typeof value === "number" ? true : false;
// };
// const numberOrString = (value: number | string): string => {
//   if (typeof value === "string") return "string";
//   if (isNumber(value)) return "number";
//   return createError("This should never happer!");
// };
//////////// Type assertion
// type One = string;
// type Two = string | number;
// type Three = "hello";
// /// convert to more or less specific
// let a: One = "hello";
// let b = a as Two; // less specific
// let c = a as Three; // more specific
// let d = <One>"World";
// let e = <string | number>"world";
// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "concat"
// ): number | string => {
//   if (c === "add") return a + b;
//   return "" + a + b;
// };
// let myVal: string = addOrConcat(2, 2, "concat") as string;
// /// be careful! TS sees no problem - but a string is returned
// let nextVal: number = addOrConcat(2, 2, "concat") as number;
// //// The DOM
// const img = document.getElementById("img") as HTMLImageElement;
// const myImg = document.querySelector(".img")!;
//////// Classes
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Aleksandre = new Coder("Aleksandre", "Rock", 29);
console.log(Aleksandre.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
/////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(John.id); // 1
console.log(Peeps.count); // 3
////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data = [123]; // Param is not an array of strings
// at set data
