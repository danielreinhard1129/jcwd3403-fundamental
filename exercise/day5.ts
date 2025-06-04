// No 1
const sortFunction = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  const lowest: number = arr[0];
  const highest: number = arr[arr.length - 1];
  const sum: number = arr.reduce((a, b) => {
    return a + b;
  });
  const average: number = sum / arr.length;

  return [lowest, highest, average];
};

console.log(sortFunction([12, 5, 23, 18, 4, 45, 32]));

// No 2
const concatWords = (words: string[]) => {
  const lastWord = words.pop();
  const result = words.join(", ") + " and " + lastWord;
  console.log(result);
};

concatWords(["apple", "banana", "cherry", "date"]);

// No 3
const secondSmallest = (arr: number[]) => {
  const sortedArr = arr.sort((a, b) => a - b);

  console.log(sortedArr[1]);

  return sortedArr[1];
};

console.log(secondSmallest([5, 3, 1, 7, 2, 6]));

// No 4
const calculateArr = (arr1: number[], arr2: number[]) => {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }

  console.log(result);

  return result;
};

console.log(calculateArr([1, 2, 3], [3, 2, 1]));

// No 5
const addNewElement = (arr: number[], newElement: number) => {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }

  return arr;
};

console.log(addNewElement([1, 2, 3, 4], 7));
console.log(addNewElement([1, 2, 3, 4], 4));

// No 6
const sumNumberDataTypes = (arr: any[]) => {
  let total: number = 0;

  arr.forEach((value) => {
    if (typeof value === "number") {
      total += value;
    }
  });

  return total;
};

console.log(sumNumberDataTypes(["3", 1, "string", null, false, undefined, 2]));
console.log(sumNumberDataTypes(["3", 1, "string", null, false, undefined, 4]));

// No 7
const limitData = (maxSize: number, numbers: number[]) => {
  const result: number[] = [];

  numbers.forEach((number) => {
    if (result.length >= maxSize) {
      return;
    }
    result.push(number);
  });

  return result;
};

console.log(limitData(3, [5, 10, 24, 3, 6, 7, 8]));
console.log(limitData(5, [5, 10, 24, 3, 6, 7, 8]));

// No 8
const combineArr = (arr1: number[], arr2: number[]) => {
  return [...arr1, ...arr2];
};

console.log(combineArr([1, 2, 3], [4, 5, 6]));

// No 9
const findDuplicates = (arr: number[]) => {
  const duplicates: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    let count: number = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === currentNumber) {
        count++;
      }
    }

    if (count > 1 && !duplicates.includes(currentNumber)) {
      duplicates.push(currentNumber);
    }
  }

  return duplicates;
};

console.log(findDuplicates([1, 2, 2, 2, 3, 3, 4, 5, 5]));
console.log(findDuplicates([1, 1, 2, 2, 2, 3, 3, 4, 5, 5]));

// No 10
const findDifference = (arr1: number[], arr2: number[]) => {
  const difference: number[] = [];

  for (const item of arr1) {
    if (!arr2.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  for (const item of arr2) {
    if (!arr1.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  return difference;
};

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// No 11

console.log(typeof []);
console.log(typeof {});
console.log(typeof null);

const filterPrimitiveDataTypes = (arr: any[]) => {
  const result = arr.filter((value) => {
    return typeof value !== "object" || value === null;
  });

  return result;
};

console.log(filterPrimitiveDataTypes([1, [], undefined, {}, "string", {}, []]));

// No 12
const sumDuplicateValues = (arr: number[]) => {
  const seen: number[] = [];
  const duplicate: number[] = [];
  let result: number = 0;

  for (const value of arr) {
    if (seen.includes(value)) {
      if (!duplicate.includes(value)) {
        duplicate.push(value);
      }
    } else {
      seen.push(value);
    }
  }

  console.log(seen);
  console.log(duplicate);

  for (const value of arr) {
    if (duplicate.includes(value)) {
      result += value;
    }
  }

  console.log(result);
  return result;
};

console.log(sumDuplicateValues([10, 20, 40, 10, 50, 30, 10, 60, 10]));
console.log(sumDuplicateValues([10, 20, 20, 40, 10, 50, 30, 10, 60, 10]));

// No 13
const rockPaperScissor = (player: "rock" | "paper" | "scissor") => {
  const choices: string[] = ["rock", "paper", "scissor"];

  const computer = choices[Math.floor(Math.random() * 2.9)];

  if (player === computer) {
    return "draw";
  }

  if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "win";
  }

  return "lose";
};

console.log(rockPaperScissor("rock"));

// git add .
// git commit -m "exercise day 4 & 5"
// git push origin main