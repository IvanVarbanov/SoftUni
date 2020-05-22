function solve(input) {
    let budget = Number(input.shift()); //Бюджет с който разполагат
    let seasson = input.shift().toUpperCase(); //Сезона
    let count = Number(input.shift()); //Броя рибари

    let rent;

    if (seasson == "SPRING") {
        rent = 3000;

        if (count <= 6) {
            rent *= 0.9;
        } else if (count >= 7 && count <= 11) {
            rent *= 0.85;
        } else {
            rent *= 0.75;
        }
    } else if (seasson == "WINTER") {
        rent = 2600;
        if (count <= 6) {
            rent *= 0.9;
        } else if (count >= 7 && count <= 11) {
            rent *= 0.85;
        } else {
            rent *= 0.75;
        }
    } else {
        rent = 4200;
        if (count <= 6) {
            rent *= 0.9;
        } else if (count >= 7 && count <= 11) {
            rent *= 0.85;
        } else {
            rent *= 0.75;
        }
    }

    if (count % 2 == 0 && seasson != "AUTUMN") {
        rent *= 0.95;
    }

    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
    }
}

solve(["3000", "Summer", "11"]);
solve(["3600", "Autumn", "6"]);
solve(["2000", "Winter", "13"]);
