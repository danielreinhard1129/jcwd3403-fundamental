// versi JS
const message = "Hello world";

// versi TS
const message2: string = "Hello world";

// ======================================== STRING BUILT IN METHOD
const name: string = "BuBdi ";
const name2: string = "Ucok ";
const name3: string = "Udin ";

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
const name4: string = "Budi";
const message3: string = "Welcome ";
console.log(message3 + name4);

console.log(`Welcome ${name4}`);

// ======================================== NUMBER BUILT IN METHOD

const angka = "2000";
console.log(Number(angka));
console.log(parseInt(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// ======================================== STRING CONVERSION

const angka1: number = 20;
console.log(String(angka1));
console.log(angka1.toString());

// ======================================== BOOLEAN CONVERSION

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean("budi"));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));

// ======================================== DATE

const now: Date = new Date();
console.log(now);

// GET METHOD
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.toDateString());

// SET METHOD
now.setDate(10);
now.setMonth(2);
now.setFullYear(2040);

console.log(now);

// ======================================== BASIC OPERATOR
/* 
    + -> pertambahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> modulo (sisa bagi)
    ** -> pangkat
*/

console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(8 / 4);
console.log(9 % 2);
console.log(3 ** 2);

// ======================================== MODIFY IN PLACE

let n: number = 4;
n += 2; // n = n + 2
// n = n + 2
console.log(n);

// ======================================== INCREMENT & DECREMENT
let counter: number = 1;

counter++; // increment
counter--; // decrement

console.log(counter);

// ======================================== POSTFIX & PREFIX

let counter2: number = 2;

console.log(counter2++); // postfix
// console.log(++counter2); // prefix

// ======================================== COMPARISON OPERATOR

/* 
    ==
    ===
    <
    >
    <=
    >=
*/

// console.log("2" == 2); // pengecekan divaluenya saja
// console.log("2" === 2); // pengecekan divalue dan tipe datanya
console.log(5 < 2);
console.log(5 > 2);
console.log(5 <= 5);
console.log(5 >= 5);

// ======================================== MATH
// Math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.2));

// Math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.8));

// Math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.3));
console.log(Math.round(4.7));

// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 10, 12, 100, 11, 14));

// Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(1, 10, 12, 100, 11, 14));

// Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-200));

// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());

console.log(Math.floor(Math.random() * 100) + 1); // 1 - 100

// Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (20 - 12 + 1)) + 12); // 12 - 20

// ======================================== HOISTING

console.log(a);
var a;

// console.log(b);
// let b;
