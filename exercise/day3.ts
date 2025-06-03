// No 1
const angka: number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${angka} x ${i} = ${angka * i}`);
}

// No 2
const kata: string = "madam";
let result: string = "";

for (let i = kata.length - 1; i >= 0; i--) {
  result += kata[i];
}

console.log(result === kata ? "palindrome" : "not palindrome");

// No 3
const cm: number = 100_000;
const km: number = cm / 100_000;
console.log(km);

// No 4
const harga: number = 10000;
const hasil: string = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
}).format(harga);

console.log(hasil);

// No 5
const kata2: string = "Hello World";
const search: string = "ell";
const result2: string = kata2.replace(search, "");
console.log(result2);

// No 6
const input: string = "hello world";
let words = input.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words);
console.log(words.join(" "));

// No 7
const inputString: string = "The QuiCk BrOwN Fox";
let swappedString: string = "";

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === inputString[i].toUpperCase()) {
    swappedString += inputString[i].toLowerCase();
  } else {
    swappedString += inputString[i].toUpperCase();
  }
}

console.log(swappedString);

// No 8
const num1: number = 42;
const num2: number = 27;
console.log(num1 > num2 ? num1 : num2);

// No 9
const number1: number = 42;
const number2: number = 27;
const number3: number = 18;

const smallest: number = Math.min(number1, number2, number3);
const largest: number = Math.max(number1, number2, number3);
const middle: number = number1 + number2 + number3 - smallest - largest;

console.log(`${smallest} ${middle} ${largest}`);

// No 10
const inputRandom: any = "test";

if (typeof inputRandom === "string") {
  console.log(1);
} else if (typeof inputRandom === "number") {
  console.log(2);
} else {
  console.log(3);
}

// No 11
const input2: string = "An apple a day keeps the doctor away".toLowerCase();
const replaceWord: string = "a";
let modifiedString: string = "";

for (let i = 0; i < input2.length; i++) {
  if (input2[i] === replaceWord) {
    modifiedString += "*";
  } else {
    modifiedString += input2[i];
  }
}

console.log(modifiedString);
