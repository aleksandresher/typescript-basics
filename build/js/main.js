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
// class Coder {
//   secondLand!: string;
//   constructor(
//     public readonly name: string,
//     public music: string,
//     private age: number,
//     protected lang: string = "Typescript"
//   ) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
//   public getAge() {
//     return `Hello, I'm ${this.age}`;
//   }
// }
// const Aleksandre = new Coder("Aleksandre", "Rock", 29);
// console.log(Aleksandre.getAge());
// class WebDev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age);
//     this.computer = computer;
//   }
//   public getLang() {
//     return `I write ${this.lang}`;
//   }
// }
// const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
// console.log(Sara.getLang());
// //////////////////////////////////////
// interface Musician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }
// class Guitarist implements Musician {
//   name: string;
//   instrument: string;
//   constructor(name: string, instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }
//   play(action: string) {
//     return `${this.name} ${action} the ${this.instrument}`;
//   }
// }
// const Page = new Guitarist("Jimmy", "guitar");
// console.log(Page.play("strums"));
// /////////////////////////////////////////
// class Peeps {
//   static count: number = 0;
//   static getCount(): number {
//     return Peeps.count;
//   }
//   public id: number;
//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++Peeps.count;
//   }
// }
// const John = new Peeps("John");
// const Steve = new Peeps("Steve");
// const Amy = new Peeps("Amy");
// console.log(John.id); // 1
// console.log(Peeps.count); // 3
// ////////////////////////////
// class Bands {
//   private dataState: string[];
//   constructor() {
//     this.dataState = [];
//   }
//   public get data(): string[] {
//     return this.dataState;
//   }
//   public set data(value: string[]) {
//     if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
//       this.dataState = value;
//       return;
//     } else throw new Error("Param is not an array of strings");
//   }
// }
// const MyBands = new Bands();
// MyBands.data = ["Neil Young", "Led Zep"];
// console.log(MyBands.data);
// MyBands.data = [...MyBands.data, "ZZ Top"];
// console.log(MyBands.data);
// MyBands.data = [123]; // Param is not an array of strings
// at set data
/////////////////////////////// Index signatures and keyof assertions
// interface TransactionObj {
//   readonly [index: string]: number;
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
// };
// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Pizza"]);
// let prop: string = "Pizza";
// console.log(todaysTransactions[prop]);
// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction];
//   }
//   return total;
// };
// console.log(todaysNet(todaysTransactions));
// //todaysTransactions.Pizza = 40
// console.log(todaysTransactions["Aleksandre"]);
// interface Student {
//   //[key: string]: string | number | number[] | undefined
//   name: string;
//   GPA: number;
//   classes?: number[];
// }
// const student: Student = {
//   name: "Doug",
//   GPA: 3.5,
//   classes: [100, 200],
// };
// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`);
// }
// Object.keys(student).map((key) => {
//   console.log(student[key as keyof typeof student]);
// });
// const logStudentKey = (student: Student, key: keyof Student): void => {
//   console.log(`Student ${key}: ${student[key]}`);
// };
// logStudentKey(student, "name");
// type Streams = "salary" | "bonus" | "sidehustle";
// type Incomes = Record<Streams, number>;
// const monthlyIncomes: Incomes = {
//   salary: 500,
//   bonus: 100,
//   sidehustle: 250,
// };
// for (const revenue in monthlyIncomes) {
//   console.log(monthlyIncomes[revenue as keyof Incomes]);
// }
///////////////////// Generics
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "Aleksandre" }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Aleksandre";
const myState = new StateObject([15]);
myState.state = ["Aleksandre", 29, true];
console.log(myState.state);
