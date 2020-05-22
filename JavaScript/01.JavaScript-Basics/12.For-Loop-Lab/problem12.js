function solve(input) {
    let age = +input.shift();
    let price = +input.shift();
    let toyPrice = +input.shift();

    let moneySum = 0;
    let totalToys = 0;

    for (i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneySum += i * 5 - 1;
        } else {
            totalToys += 1;
        }
    }

    let totalMoney = moneySum + totalToys * toyPrice;

    if (totalMoney > price) {
        console.log(`Yes! ${(totalMoney - price).toFixed(2)}`);
    } else {
        console.log(`No! ${(price - totalMoney).toFixed(2)}`);
    }
}

solve(["77", "170.00", "6"]);
console.log();
solve(["21", "1570.98", "3"]);
