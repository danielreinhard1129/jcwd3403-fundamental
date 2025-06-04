// No 1
function segitiga(height: number) {
  for (let i = 1; i <= height; i++) {
    let row: string = "";

    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }

    console.log(row);
  }
}

segitiga(5);

// No 2
function segitiga2(height: number) {
  let currentNumber: number = 1;

  for (let i = 1; i <= height; i++) {
    let row: string = "";

    for (let j = 1; j <= i; j++) {
      if (currentNumber < 10) {
        row += "0" + currentNumber + " ";
      } else {
        row += currentNumber + " ";
      }
      currentNumber++;
    }

    console.log(row);
  }
}

segitiga2(5);

// No 3
function fizzBuzz(n: number) {
  let message: string = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      message += "FizzBuzz" + " ";
    } else if (i % 3 === 0) {
      message += "Fizz" + " ";
    } else if (i % 5 === 0) {
      message += "Buzz" + " ";
    } else {
      message += i + " ";
    }
  }

  console.log(message);
}

fizzBuzz(15);

// No 4
function bmi(weight: number, height: number) {
  const result = weight / (height * height);

  if (result < 18.5) {
    console.log("less weight");
  } else if (result >= 18.5 && result <= 24.9) {
    console.log("ideal");
  } else if (result >= 25.0 && result <= 29.9) {
    console.log("overweight");
  } else if (result >= 30.0 && result <= 39.9) {
    console.log("very overweight");
  } else {
    console.log("obesity");
  }
}

const weight: number = 85; // in kg
const height: number = 1.75; // in meters
bmi(weight, height);

// No 5
function removeOddNumber(numbers: number[]) {
  const result = numbers.filter((number) => {
    return number % 2 === 0;
  });

  console.log(result);
}

removeOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// No 6
function splitString(input: string) {
  const result = input.split(" ");

  console.log(result);
}

splitString("Hello World");
