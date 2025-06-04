// ARRAY

const arr = []; // cara 1
const arr2 = new Array(); // cara 2

// array of string
const arrString: string[] = ["A", "B", "C", "D"];

// array of number
const arrNumber: number[] = [1, 2, 3, 4, 5];

console.log(arrString[2]);

const students = [
  {
    name: "Budi",
    email: "budi@mail.com",
  },
  {
    name: "Siti",
    email: "siti@mail.com",
  },
];

console.log(students[1].name);

// ======================================== FOR OF
const fruits: string[] = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// ======================================== FUNCTION
// 1. function declaration
/* 
    function namaFunction(parameter){
        // logic
    }

*/

function square(angka: number) {
  return angka * angka;
}

const hasil1 = square(5);
const hasil2 = square(7);
const hasil3 = square(2);

console.log(hasil1);
console.log(hasil2);
console.log(hasil3);

// 2. function expression
const square2 = function (angka: number) {
  return angka * angka;
};

const hasil4 = square2(5);
const hasil5 = square2(7);

console.log(hasil4);
console.log(hasil5);

// ======================================== FUNCTION SCOPE
// variable yg di define di dalam function hanya bisa diakses di dalam func tsb

function greeting() {
  const hello: string = "Hello";
  console.log(hello); // ini bisa
}

// console.log(hello); // ini gak bakalan bisa

greeting();

// ======================================== PARAMETER & ARGUMENT
// parameter -> variable yg mewakili value dari argument yg dimasukkan
// argument -> value yg dimasukkan saat pemanggilan function

//         parameter 👇
function greeting2(name: string) {
  const hello: string = "Hello ";
  return hello + name;
}

// argument 👇
console.log(greeting2("Budi"));
console.log(greeting2("Siti"));

// ======================================== DEFAULT PARAMETER

function multiply(a: number, b: number = 2) {
  console.log(a);
  console.log(b);
  return a * b;
}

multiply(2, 10);

// ======================================== REST PARAMETER
// mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ======================================== NESTED FUNCTION
// fungsi yang berada di dalam fungsi
// inner function bisa mengakses parameter dari outer function
// outer function tidak bisa akses parameter dari inner function

// outer function
function getMessage(firstName: string) {
  // inner function 1
  function sayHello() {
    return "Hello " + firstName + ",";
  }

  // inner function 2
  function welcomeMessage() {
    return "Welcome to purwadhika";
  }

  return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("Siti"));

// ======================================== CLOSURE
// inner function selalu mempunyai akses ke variable dan parameter dari outer function bahkan
// setelah function tsb di return

// outer function
function greeting3(name: string) {
  const defaultMessage: string = "Hello";

  return function () {
    return defaultMessage + " " + name;
  };
}

const result = greeting3("Budi");
console.log(result());

// ======================================== RECURSIVE
// fungsi yang memanggil dirinya sendiri

function countdown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countdown(nextNumber);
  }
}

countdown(10);

// ======================================== ARROW FUNCTION
// shortcut untuk menuliskan function expression

// contoh function expression
const square3 = function (angka: number) {
  return angka * angka;
};

// syntax -> (parameter) => {}
// contoh jika diubah ke arrow function
const square4 = (angka: number) => {
  return angka * angka;
};

// kalo misalnya cuman 1 line bisa di singkat kaya gini
const square5 = (angka: number) => angka * angka;

// ======================================== ARRAY BUILT IN METHOD
// JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan value paling akhir dalam array
const words2: string[] = ["test", "hello", "world"];
console.log(words2);
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["test", "hello", "world"];
console.log(words3);
words3.shift();
console.log(words3);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words4: string[] = ["test", "hello", "world"];
words4.unshift("siti");
words4;

// PUSH -> menambahkan data baru ke urutan paling akhir array
const words5: string[] = ["test", "hello", "world"];
words5.push("joko");
console.log(words5);

// SPLICE -> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
// rumus -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "mar", "apr", "jun"];
months.splice(1, 0, "feb");
console.log(months);

months.splice(4, 1);
console.log(months);

months.splice(3, 1, "may");
console.log(months);

// SLICE -> mereturn array baru berdasarkan start index dan end index
// rumus -> slice(startIndex, endIndex)
const fruits1: string[] = ["apple", "banana", "orange", "mango", "lemon"];
console.log(fruits1.slice(1, 4));

// INDEXOF -> mencari index dari value yang kita search, kalo tidak ditemukan akan me return -1
const fruits2: string[] = ["apple", "banana", "orange", "mango", "lemon"];
console.log(fruits2.indexOf("orange"));
console.log(fruits2.indexOf("sdadsadada"));

// SORT -> mengurutkan isi array berupa string atau number
const fruits3: string[] = ["banana", "orange", "apple", "mango", "lemon"];
fruits3.sort();
console.log(fruits3);

const points: number[] = [2, 3, 11, 7, 5];
points.sort();
console.log(points);

points.sort((a, b) => a - b); // asc (kecil ke besar)
console.log(points);

points.sort((a, b) => b - a); // desc (besar ke kecil)
console.log(points);

// REVERSE -> membalikkan urutan element dalam array
const points2: number[] = [2, 3, 11, 7, 5];
points2.reverse();
console.log(points2);

// MAP -> melakukan looping pada array dan akan mereturn array baru
const points3: number[] = [1, 2, 3, 4, 5];

const result2 = points3.map((point, index) => {
  return point * 2;
});

console.log(result2);

// FOREACH -> melakukan looping pada array tapi tidak me return array baru
const fruits4: string[] = ["banana", "orange", "apple", "mango", "lemon"];
const result3 = fruits4.forEach((fruit) => {
  // logic
  console.log(fruit);
  return fruit;
});

// FILTER -> melakukan looping pada array dan menghasilkan array baru berdasarkan kondisi pada return function
const ages: number[] = [32, 15, 40, 22, 45];
const result4 = ages.filter((age) => {
  return age > 17;
});

console.log(result4);

// FIND -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [32, 15, 40, 22, 45, 15];
const result5 = ages2.find((age) => {
  return age > 14 && age < 16;
});

console.log(result5);

// FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah indexnya
const ages3: number[] = [9, 12, 15, 40, 22, 12];
const result6 = ages3.findIndex((age) => {
  return age > 12;
});

console.log(result6);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers: number[] = [200, 50, 100, 50];

const result7 = numbers.reduce((a, b) => {
  return a + b;
});

console.log(result7);

// INCLUDES -> mengecek value pada array ada apa tidak, hasil return nya adalah boolean
const fruits5: string[] = ["banana", "orange", "apple", "mango", "lemon"];
console.log(fruits5.includes("banana"));
console.log(fruits5.includes("asdasdass"));
