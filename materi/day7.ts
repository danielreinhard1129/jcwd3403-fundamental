import { myFunc } from "./test";

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Budi");
      } else {
        reject("Terjadi kesalahan");
      }
    }, 2000);
  });
}

fetchData() // promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise selesai");
  });

const fetchUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchUser();

const getUserBudi = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUserBudi();

const getUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/userssadas"
    );
    const users = await response.json();

    if (!response.ok) {
      //   throw "Terjadi kesalahan";
      throw new Error("Terjadi kesalahan");
    }

    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

getUsers();

// JSON -> javascript object notation

const user = {
  name: "budi",
  age: 32,
};

// const user2 = { // JSON
//   "name": "budi",
//   "age": 32
// }

// convert object js ke JSON
const userJSON = JSON.stringify(user);
console.log(userJSON);

// convert JSON ke object js
const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);

myFunc()