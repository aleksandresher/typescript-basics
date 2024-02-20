"use strict";
// let stringArr = ["one", "hey", "Dave"];
/// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "World";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
/// be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
//// The DOM
const img = document.getElementById("img");
const myImg = document.querySelector(".img");
img.src;
