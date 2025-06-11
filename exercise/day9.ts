// No 1
/* 
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555"
*/

const phoneNumber = (input: string) => {
  // cek dulu lengthnya
  if (input.length !== 12) {
    return "Invalid phone number";
  }

  // Make sure the input all are numeric 0-9
  for (let i = 0; i < input.length; i++) {
    if (input[i] < "0" || input[i] > "9") {
      return "Invalid phone number";
    }
  }

  const temp = "62" + input.slice(1);

  let template = "(xxxx)-xxxx-xxxxx";

  const splitInput = temp.split("");

  splitInput.forEach((item) => {
    template = template.replace("x", item);
  });

  return template;
};

console.log(phoneNumber("085211155555"));

// No 2
/* 
    buat parent class Product
    constructor = nama, berat, price, stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/

class Product {
  name: string;
  weight: number;
  price: number;
  stock: number;

  constructor(name: string, weight: number, price: number, stock: number) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.stock = stock;
  }
}

class Buku extends Product {
  author: string;

  constructor(
    name: string,
    weight: number,
    price: number,
    stock: number,
    author: string
  ) {
    super(name, weight, price, stock);
    this.author = author;
  }
}

class Pakaian extends Product {
  size: string;
  color: string;

  constructor(
    name: string,
    weight: number,
    price: number,
    stock: number,
    size: string,
    color: string
  ) {
    super(name, weight, price, stock);
    this.size = size;
    this.color = color;
  }
}

interface Cart {
  product: Product;
  qty: number;
}

class OnlineShop {
  products: Product[];
  cart: Cart[];

  constructor() {
    this.products = [];
    this.cart = [];
  }

  addProduct(product: Product) {
    // cek dulu produk tsb sudah ada di dalam property products atau belom
    const existingProduct = this.products.find((p) => p.name === product.name);

    // kalo sudah ada return "produk sudah ada di dalam catalog"
    if (existingProduct) {
      return "product already exist!";
    }
    // kalo misalnya belom ada masukin datanya ke property products
    this.products.push(product);

    // return tambah produk/catalog success
    return "add product/catalog success";
  }

  addToCart(product: Product, qty: number) {
    // cek dulu produk nya ada ga di catalog
    const availableProduct = this.products.find((p) => {
      return p.name === product.name;
    });
    // kalo misalnya gak ada di catalog, return product not found
    if (!availableProduct) {
      return "product not found!";
    }
    // kalo misalnya ada produknya di catalog
    // cek lagi produknya di dalam cart sudah ada atau belom
    const cartItem = this.cart.find((c) => c.product.name === product.name);

    if (cartItem) {
      // kalo produknya sudah ada didalam cart
      if (availableProduct.stock >= qty) {
        availableProduct.stock -= qty;
        cartItem.qty += qty;
        return "add to cart success";
      } else {
        return "stok tidak cukup";
      }
    } else {
      // kalo produknya belom ada didalam cart
      if (availableProduct.stock >= qty) {
        this.cart.push({ qty: qty, product: product });
        availableProduct.stock -= qty;
        return "add to cart success";
      } else {
        return "stok tidak cukup";
      }
    }
  }

  transaction(userMoney: number, distance: number) {
    let totalPrice: number = 0;
    const costPerKm = 2000;

    this.cart.forEach((c) => {
      totalPrice += c.product.price * c.qty;
    });

    const ongkir = distance * costPerKm;
    const total = totalPrice + ongkir;

    if (userMoney < total) {
      return `Uang tidak cukup! | total yg harus dibayar: ${total}`;
    }

    this.cart = [];

    return {
      message: "transaksi berhasil",
      totalPrice: totalPrice,
      ongkir: ongkir,
      total: total,
      kembalian: userMoney - total,
    };
  }

  showCart() {
    let total: number = 0;

    this.cart.forEach((c) => {
      total += c.product.price * c.qty;
    });

    return {
      cart: this.cart,
      totalPrice: total,
    };
  }

  showCatalog() {
    return {
      catalog: this.products,
      totalCatalog: this.products.length,
    };
  }
}

const buku = new Buku("Cara jago ngoding", 0.4, 80_000, 10, "Budi");
const pakaian = new Pakaian("Kaos Oblong", 0.3, 100_000, 8, "XL", "putih");

const tokopaedi = new OnlineShop();
console.log(tokopaedi.addProduct(buku));
console.log(tokopaedi.addProduct(pakaian));
console.log(tokopaedi.showCatalog());
console.log(tokopaedi.addToCart(pakaian, 5));
console.log(tokopaedi.addToCart(pakaian, 1));
console.log(tokopaedi.showCart());
console.log(tokopaedi.transaction(650_000, 10));
