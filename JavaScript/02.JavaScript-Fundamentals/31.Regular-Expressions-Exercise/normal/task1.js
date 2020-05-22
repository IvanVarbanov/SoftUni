function furniture(array = []) {
    let string = array.join(" ");

    let pattern = />>(?<furniture>[A-za-z]+[ ]?\w+)<<(?<price>\d+\.?\d+)\!(?<qty>\d+)/g;

    let furnitureArr = [];
    let totalCost = 0;

    while ((validFurniture = pattern.exec(string)) !== null) {
        let furniture = validFurniture.groups["furniture"];
        let price = Number(validFurniture.groups["price"]);
        let qty = Number(validFurniture.groups["qty"]);

        furnitureArr.push(furniture);
        totalCost += price * qty;
    }

    console.log("Bought furniture:");
    for (const furniture of furnitureArr) {
        console.log(furniture);
    }
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
