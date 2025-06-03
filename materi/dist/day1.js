"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// versi JS
const message = "Hello world";
// versi TS
const message2 = "Hello world";
// ======================================== STRING BUILT IN METHOD
const name = "BuBdi ";
const name2 = "Ucok ";
const name3 = "Udin ";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("B", "P"));
console.log(name.replaceAll("B", "P"));
console.log(name.split(""));
console.log(name.concat(name2).concat(name3));
console.log(name + name2 + name3);
console.log(name2.slice(1));
console.log(name2.slice(1, 3));
console.log(name2.slice(0, 3));
// ======================================== TEMPLATE LITERALS / TEMPLATE STRING
const name4 = "Budi";
const message3 = "Welcome ";
console.log(message3 + name4);
console.log(`Welcome ${name4}`);
// ======================================== NUMBER BUILT IN METHOD
const angka = "2000";
console.log(Number(angka));
console.log(parseInt(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// ======================================== STRING CONVERSION
const angka1 = 20;
console.log(String(angka1));
