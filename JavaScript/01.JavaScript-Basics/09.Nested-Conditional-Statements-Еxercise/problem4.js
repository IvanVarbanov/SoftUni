function solve(input) {
    let flowerType = input.shift().toUpperCase();
    let flowerNumber = Number(input.shift());
    let budget = Number(input.shift());

    let price;

    if (flowerType == "ROSES") {
        price = flowerNumber * 5;

        if (flowerNumber > 80) {
            price *= 0.9;
        }
    } else if (flowerType == "DAHLIAS") {
        price = flowerNumber * 3.8;

        if (flowerNumber > 90) {
            price *= 0.85;
        }
    } else if (flowerType == "TULIPS") {
        price = flowerNumber * 2.8;

        if (flowerNumber > 80) {
            price *= 0.85;
        }
    } else if (flowerType == "NARCISSUS") {
        price = flowerNumber * 3;

        if (flowerNumber < 120) {
            price *= 1.15;
        }
    } else if (flowerType == "GLADIOLUS") {
        price = flowerNumber * 2.5;

        if (flowerNumber < 80) {
            price *= 1.2;
        }
    }

    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${flowerNumber} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}
solve(["Roses", "55", "250"]);
solve(["Tulips", "88", "260"]);
solve(["Narcissus", "119", "360"]);
