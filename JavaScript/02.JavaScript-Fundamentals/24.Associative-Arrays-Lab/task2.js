function storage(input = []) {
    let storage = new Map();
    for (const item of input) {
        let [name, qty] = item.split(" ");
        qty = Number(qty);

        if (storage.has(name)) {
            qty += storage.get(name);
        }

        storage.set(name, qty);
    }

    for (const [item, qty] of storage) {
        console.log(`${item} -> ${qty}`);
    }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
