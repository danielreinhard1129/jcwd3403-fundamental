interface Student {
  name: string;
  email: string;
}

const combineArray = (arr1: Student[], arr2: Student[]) => {
  const students = [...arr1, ...arr2];
  const temp = [];

  students.forEach((student) => {
    const existingStudent = temp.find((murid) => {
      return murid.email === student.email;
    });

    if (!existingStudent) {
      temp.push(student);
    }
  });

  console.log(temp);
  return temp;
};

const arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const arr2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(combineArray(arr1, arr2));

// No 2
const switchKeyToValue = (data: any[]) => {
  const result = [];

  data.forEach((item) => {
    const temp = {};

    for (const key in item) {
      temp[item[key]] = key;
    }

    result.push(temp);
  });

  console.log(result);
};

switchKeyToValue([{ name: "David", age: 20 }]);

// No 3
const factorial = (n: number) => {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };
  } else {
    const next = factorial(n - 1);

    console.log(next);

    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
};

const { steps, total } = factorial(5);
console.log(steps);
console.log(total);
console.log(steps.join(" x ") + " = " + total);

// ================================================================================

// const obj1: Student = { name: "Student 1", email: "student1@mail.com" };
// const obj2 = { address: "Jl.gatot subroto", name: "udin" };

// const newObj = { ...obj1, ...obj2 };

// console.log(newObj);
