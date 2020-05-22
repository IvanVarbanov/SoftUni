function storeProvisions(stock = [], ordered = []) {
    let productsInStock = [];

    class Product {
        constructor(productName, productQty) {
            this.name = productName;
            this.quantity = productQty;
        }
    }

    for (let i = 0; i < stock.length - 1; i += 2) {
        let productName = stock[i];
        let productQty = Number(stock[i + 1]);

        productsInStock.push(new Product(productName, productQty));
    }

    for (let i = 0; i < ordered.length - 1; i += 2) {
        let productName = ordered[i];
        let productQty = Number(ordered[i + 1]);
        let isNew = true;

        for (const product of productsInStock) {
            if (product.name == productName) {
                isNew = false;
                product.quantity += productQty;
                break;
            }
        }

        if (isNew) {
            productsInStock.push(new Product(productName, productQty));
        }
    }

    for (const product of productsInStock) {
        console.log(product.name + " -> " + product.quantity);
    }
}

storeProvisions(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
