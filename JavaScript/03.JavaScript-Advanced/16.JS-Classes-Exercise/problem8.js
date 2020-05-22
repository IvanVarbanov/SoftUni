class Kitchen {
    #menu = [];
    #productsInStock = [];
    #actionsHistory = [];

    constructor(budget) {
        this.budget = budget;
    }

    loadProducts(data) {
        let parsedData = data
            .map((x) => x.split(' '))
            .map(([name, quantity, price]) => {
                return {
                    name,
                    quantity: Number(quantity),
                    price: Number(price),
                };
            });

        parsedData.forEach((p) => {
            let totalPrice = p.quantity * p.price;
            let isNew = true;
            for (const pInStock of this.#productsInStock) {
                if (pInStock.name === p.name) {
                    isNew = false;
                }
            }
            if (totalPrice <= this.budget) {
                this.budget -= totalPrice;
                if (isNew) {
                    this.#productsInStock.push({ name: p.name, quantity: p.quantity });
                } else {
                    this.#productsInStock.map((pInStock) => {
                        if (pInStock.name === p.name) {
                            pInStock.quantity += p.quantity;
                        }
                    });
                }
                this.#actionsHistory.push(`Successfully loaded ${p.quantity} ${p.name}`);
            } else {
                this.#actionsHistory.push(`There was not enough money to load ${p.quantity} ${p.name}`);
            }
        });

        return this.#actionsHistory.join('\n');
    }

    addToMenu(mealName, neededProducts = [], price) {
        let isNew = true;
        this.#menu.forEach((meal) => {
            if (meal.name === mealName) {
                isNew = false;
            }
        });
        if (isNew) {
            this.#menu.push({ name: mealName, price: price, products: neededProducts });
            return `Great idea! Now with the ${mealName} we have ${this.#menu.length} meals in the menu, other ideas?`;
        } else {
            return `The ${mealName} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        let output = this.#menu.map((meal) => {
            return `${meal.name} - $ ${meal.price}`;
        });

        return output.join('\n');
    }

    // show() {
    //     return this.#productsInStock;
    // }

    makeTheOrder(mealName) {
        let isExsist = false;
        let neededProducts, mealPrice;
        for (const meal of this.#menu) {
            if (meal.name === mealName) {
                isExsist = true;
                neededProducts = meal.products;
                mealPrice = meal.price;
                break;
            }
        }

        if (isExsist) {
            let productsInStockNameArr = this.#productsInStock.map((prd) => prd.name);
            let stock = true;

            neededProducts.forEach((product) => {
                let name = product.split(' ')[0];

                if (productsInStockNameArr.includes(name) === false) {
                    stock = false;
                }
            });

            if (stock) {
                neededProducts.forEach((product) => {
                    let [name, qty] = product.split(' ');

                    this.#productsInStock.forEach((prd) => {
                        if (prd.name === name && prd.quantity < Number(qty)) {
                            stock = false;
                        }
                    });
                });

                if (stock) {
                    neededProducts.forEach((product) => {
                        let [name, qty] = product.split(' ');

                        this.#productsInStock.forEach((prd) => {
                            if (name === prd.name) {
                                prd.quantity -= qty;
                            }
                        });
                    });
                    this.budget += mealPrice;

                    return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${mealPrice}.`;
                }
            } else {
                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
            }
        } else {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`;
        }
    }
}

let kitchen = new Kitchen(1000);

console.log(
    kitchen.loadProducts([
        'Banana 10 5',
        'Banana 20 10',
        'Strawberries 50 30',
        'Yogurt 10 10',
        'Yogurt 500 1500',
        'Honey 5 50',
    ])
);

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(
    kitchen.addToMenu(
        'Pizza',
        ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'],
        15.55
    )
);

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1'], 9.99));

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder('frozenYogurt'));
