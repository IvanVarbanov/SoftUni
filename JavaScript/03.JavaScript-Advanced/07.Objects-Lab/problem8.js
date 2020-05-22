function lowestPrice(array) {
    let productList = [];

    for (const line of array) {
        let [town, product, price] = line.split(' | ');
        isNew = true;

        productList.map((el) => {
            if (el.product == product) {
                isNew = false;
                if (el.price > price) {
                    el.oldMin = el.price;
                    el.oldTown = el.town;
                    el.town = town;
                    el.price = price;
                }
            }
        });

        if (isNew) {
            productList.push({ product: product, town: town, price: price });
        }
    }

    console.log(productList);

    // for (const product of productList) {
    //     console.log(`${product.product} -> ${product.price} (${product.town})`);
    // }
}

// lowestPrice([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10',
// ]);

lowestPrice([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000',
]);
