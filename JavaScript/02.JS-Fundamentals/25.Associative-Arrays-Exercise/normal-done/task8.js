function miner(array = []) {
    let minerList = new Map();

    for (let i = 0; i < array.length; i += 2) {
        let [resours, qty] = [array[i], array[i + 1]];

        if (minerList.has(resours)) {
            minerList.set(resours, minerList.get(resours) + Number(qty));
        } else {
            minerList.set(resours, Number(qty));
        }
    }

    for (const [res, qty] of minerList) {
        console.log(`${res} -> ${qty}`);
    }

    // console.log(minerList);
}

miner(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
