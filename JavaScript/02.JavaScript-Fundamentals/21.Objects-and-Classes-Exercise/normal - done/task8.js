class Storage {
    constructor(capacity) {
        this.capacity = capacity;
    }

    storage = [];
    totalCost = 0;

    addProduct(productObject) {
        this.storage.push(productObject);
        this.capacity -= productObject.quantity;
        this.totalCost += productObject.quantity * productObject.price;
    }
    getProducts() {
        let output = [];
        for (const product of this.storage) {
            output.push(JSON.stringify(product));
        }

        return output.join("\n");
    }
}

let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
let output = storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
console.log(output);
