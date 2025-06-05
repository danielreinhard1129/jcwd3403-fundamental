// Cara menuliskan object

const object1 = {}; // cara 1

const object2 = new Object(); // cara 2

interface User {
  name: string;
  email: string;
  hobby?: string; // optional
  greet: () => void;
}

const user: User = {
  name: "budi",
  email: "budi@mail.com",
  greet() {
    console.log("hello");
  },
};

const person: any = {
  name: "joko",
  age: 20,
};

// add property
console.log(person);
person.hobby = "mancing";
console.log(person);
person["address"] = "jakarta";
console.log(person);

// delete property
delete person.address;
console.log(person);

// accessing value
console.log(person.name); // using dot
console.log(person["age"]); // using square bracket

// ========================================== IMMUTABLE & MUTABLE
/* 
    immutable: merujuk pada tipe data yang tidak bisa diubah setelah dibuat 
    (primitive data types). 

    mutable: merujuk pada tipe data yang bisa diubah setelah dibuat 
    (non primitive data types). 
*/

// immutable
const count1: number = 4;
let count2: number = count1;
count2 = 10;

console.log(count1);
console.log(count2);

// mutable
let orang1: any = { name: "jack" };
// let orang2: any = orang1;
let orang2: any = { ...orang1 }; // shallow copy

orang2.age = 10;

console.log(orang1);
console.log(orang2);

let company = {
  name: "PT Suka Maju",
  address: {
    street: "Jl. jalan ke bandung",
    city: "Wakanda Barat",
    postalCode: 12332,
  },
};

// let company1 = { ...company };

// company1.name = "asdasdsa";
// company1.address.street = "asdadasdadsa";
// console.log(company);
// console.log(company1);

let company2 = structuredClone(company); // deep copy

console.log(company);
console.log(company2);
company2.name = "asdsadas";
company2.address.street = "asdsadas";
console.log(company2);

// ========================================== OPTIONAL CHAINING
const user2: any = {};

console.log(user2.address);
console.log(user2.address?.street);

// ========================================== FOR IN
const person2: any = {
  name: "aceng",
  age: 60,
};

for (const key in person2) {
  console.log(key);
  console.log(person2[key]);
}

console.log(Object.keys(person2));
console.log(Object.values(person2));

// ========================================== DESTRUCTURING ASSIGNMENT
// mengeluarkan property dalam object/array menjadi sebuah variable

// versi destruc object
const animal: any = {
  name: "joe",
  age: 2,
};

console.log(animal.name);
console.log(animal.age);

const { name, age } = animal;

console.log(name);
console.log(age);

// versi destruc array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = array;
console.log(a);
console.log(b);

// ========================================== SPREAD OPERATOR
// digunakan untuk copy isi object / menggabungkan object

const objectOne = { name: "jacky", password: "Admin123" };
const objectTwo = { email: "jacky@mail.com", name: "Pepeng" };

const result = { ...objectOne, ...objectTwo, password: "User123" };
console.log(result);

// ========================================== THIS KEYWORD
// mengakses property lain di dalam sebuah object

const person3 = {
  firstName: "udin",
  lastName: "blake",
  greet() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

person3.greet();

// ========================================== CLASS
// template / cetakan untuk membuat object

// class declaration
class User2 {
  greeting() {
    console.log("Hello World");
  }
}

// class expression
const User3 = class {
  greeting() {
    console.log("Hello World");
  }
};

const human = new User2();
const human2 = new User3();

human.greeting();
human2.greeting();

// ========================================== CONSTRUCTOR
// method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru
// menggunakan class

// ACCESS MODIFIER -> public & private

class Person {
  name: string; // public
  #email: string; // private

  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
  }

  greeting() {
    return `Hello ${this.#email}`;
  }

  private showEmail() {}
}

const orang = new Person("budi", "budi@mail.com");

console.log(orang.name);
// console.log(orang.email); // ini gak bisa krn private

// ========================================== INHERITANCE
// pewarisan dari parent class ke child class
// property dan method dari parent class bisa di akses oleh child class

// TIDAK MENGGUNAKAN KONSEP INHERITANCE
class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class Manager {
  name: string;
  salary: number;
  department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

// MENGGUNAKAN KONSEP INHERITANCE
class Employee2 {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class Manager2 extends Employee2 {
  department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary); // memanggil constructor parent class
    this.department = department;
  }
}

const manager = new Manager2("siti", 1200000, "HR");

console.log(manager.name);
console.log(manager.salary);
console.log(manager.department);
manager.work();

// ========================================== INSTANCE OF
// mengecek apakah sebuah objek memiliki hubungan ke class tertentu

class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
