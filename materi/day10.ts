// STACK -> LIFO (last in first out)
class Stack {
  #container: any[];
  #maxSize: number;

  constructor() {
    this.#container = [];
    this.#maxSize = 10;
  }

  push(element: any) {
    if (this.#container.length >= this.#maxSize) {
      return "container full";
    }

    this.#container.push(element);

    return "add element success";
  }

  pop() {
    if (this.#container.length <= 0) {
      return "container empty";
    }

    this.#container.pop();

    return "remove element sucess";
  }

  showContainer() {
    return this.#container;
  }
}

const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.showContainer());
console.log(stack.pop());
console.log(stack.showContainer());

// QUEUE -> FIFO (first in first out)
class Queue {
  #container: any[];

  constructor() {
    this.#container = [];
  }

  enqueue(element: any) {
    this.#container.push(element);
  }

  dequeue() {
    if (this.#container.length <= 0) {
      return "container empty";
    }

    this.#container.shift();
  }

  showContainer() {
    return this.#container;
  }
}

// SET -> only unique values
const fruits: string[] = ["banana", "apple", "mango", "banana"];

const mySet = new Set(fruits);
console.log(mySet);

console.log(mySet.has("apple"));

console.log(Array.from(mySet));

console.log(mySet.size);

mySet.delete("mango");
console.log(mySet.has("mango"));
console.log(mySet);

// HASH TABLE / MAP
// struktur data yang menyimpan pasangan key-value

const myMap = new Map();

myMap.set("name", "John");

console.log(myMap.get("name"));

const person = {
  name: "John",
};
