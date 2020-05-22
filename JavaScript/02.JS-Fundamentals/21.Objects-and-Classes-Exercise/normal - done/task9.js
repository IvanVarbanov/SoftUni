function catalogue(array = []) {
    let productList = [];

    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    for (const line of array) {
        let product = line.split(" : ");
        productList.push(new Product(product[0], product[1]));
    }

    productList.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    let letter = "A";
    let counter = 0;

    for (const product of productList) {
        if (product.name[0] == letter) {
            ++counter;
            if (counter == 1) {
                console.log(letter);
            }
            console.log(`  ${product.name}: ${product.price}`);
        } else {
            counter = 1;
            letter = product.name[0];
            console.log(letter);
            console.log(`  ${product.name}: ${product.price}`);
        }
    }

    //console.log(productList);
}

catalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);
