console.log("Hello world");

// ini adalah comment 1

/* 
    ini 
    adalah
    comment 2
*/

// ======================================= VARIABLE (storage / penampungan data)
// var, let, const

var person = "Budi";
console.log(person);
var person;

let person2 = "Siti";
console.log("person2", person2);

person2 = "Joko";
console.log("person2", person2);

const person3 = "Jack";
// person3 = "Siti";

// ========================================= VARIABLE NAMING
/* 
    - must contain only letters, digit, or symbol "$" and "_"
    - the first character must not digit
    - case sensitive
*/

const companyProfile = "purwadhika"; // camel case
const CompanyProfile = "Purwadhika"; // pascal case
const company_profile = "Purwadhika"; // snake case

// ========================================= DATA TYPES
// primitve data types: string, number, boolean, null dan undefined
// non primitive data types: object dan array

// string -> "" '' ``
console.log("hello");

// number -> 1 2 3 4 500 1000 10000
console.log(1);
console.log(2);
console.log(100);

// boolean -> true & false
console.log(true);
console.log(false);

// null -> menandakan sebuah value itu masih kosong dan belum terisi
let orang = null;

// undefined -> js tidak tau isinya
let orang2 = undefined;
let orang3;

console.log(typeof companyProfile);
console.log(typeof 1000);
console.log(typeof true);
console.log(typeof orang2);

// ctrl + K + Q
