function orders(productType, quantity) {
    const coffee = (quantity) => (quantity * 1.5).toFixed(2);
    const coke = (quantity) => (quantity * 1.4).toFixed(2);
    const water = (quantity) => (quantity * 1).toFixed(2);
    const snacks = (quantity) => (quantity * 2).toFixed(2);

    switch (productType) {
        case "coffee":
            return coffee(quantity);
        case "coke":
            return coke(quantity);
        case "water":
            return water(quantity);
        case "snacks":
            return snacks(quantity);
    }
}

let result = orders("water", 5);

console.log(result);
