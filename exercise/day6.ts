interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

const students: Student[] = [
  { name: "budi", email: "budi@mail.com", age: 20, score: 85 },
  { name: "joko", email: "joko@mail.com", age: 22, score: 100 },
  { name: "siti", email: "siti@mail.com", age: 21, score: 90 },
];

class CalculateStudent {
  students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }

  calculate() {
    const scores = this.students.map((student) => student.score);
    const ages = this.students.map((student) => student.age);

    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
    const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;

    const maxAge = Math.max(...ages);
    const minAge = Math.min(...ages);
    const avgAge = ages.reduce((a, b) => a + b, 0) / ages.length;

    return {
      score: {
        highest: maxScore,
        lowest: minScore,
        average: avgScore,
      },
      age: {
        highest: maxAge,
        lowest: minAge,
        average: avgAge,
      },
    };
  }
}

const calculateStudent = new CalculateStudent(students);

console.log(calculateStudent.calculate());

// No 2
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

interface Cart {
  product: Product;
  qty: number;
}

class Transaction {
  total: number;
  cart: Cart[];

  constructor() {
    this.total = 0;
    this.cart = [];
  }

  addToCart(product: Product, qty: number) {
    // cek dulu di dalam keranjang barangnya udah ada atau belum
    const existingProduct = this.cart.find((item) => {
      return item.product.name === product.name;
    });

    if (existingProduct) {
      // kalo sudah ada tambahin qty nya
      existingProduct.qty += qty;
    } else {
      // kalo belum ada buat data baru
      this.cart.push({ product, qty });
    }

    // tambahin total di property total.
    this.total += product.price * qty;
  }

  showDetail() {
    return {
      total: this.total,
      cart: this.cart,
    };
  }

  checkout(userMoney: number) {
    // cek duitnya cukup atau tidak
    if (userMoney < this.total) {
      return "uang tidak cukup!";
    }

    // kosongin keranjangnya & reset total jadi 0 lagi
    this.cart = [];
    this.total = 0;

    return "pembayaran berhasil!";
  }
}

const kaos = new Product("Kaos Oblong", 100_000);
const hoodie = new Product("Hoodie", 200_000);

const transaction = new Transaction();

transaction.addToCart(kaos, 2);
transaction.addToCart(kaos, 2);
transaction.addToCart(kaos, 1);
transaction.addToCart(kaos, 1);
transaction.addToCart(hoodie, 1);
transaction.addToCart(hoodie, 1);
console.log(transaction.showDetail());
console.log(transaction.checkout(2_000_000));
console.log(transaction.showDetail());

