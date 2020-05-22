function solve(input) {
    let budget = Number(input.shift()); // Бюджет
    let statists = Number(input.shift()); // Брой статисти
    let priceCloth = Number(input.shift()); //Цена на облеклото

    let decore = budget * 0.1; //Стойност на декора

    if (statists > 150) {
        priceCloth *= 0.9; //Добавме отстъпка за цена на облеклото ако са минимум 151 статистите
    }

    let total = decore + statists * priceCloth; // Колко пари са нужни за филма

    if (budget >= total) {
        console.log("Action!");
        console.log(`Wingard starts filming wiht ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wangard needs ${(total - budget).toFixed(2)} leva more.`);
    }
}

solve(["20000", "120", "55.5"]);
console.log();
solve(["15437.62", "186", "57.99"]);
console.log();
solve(["9587.88", "222", "55.68"]);
