function solve(input) {
    let budget = Number(input.shift()); // Бюджет с който разполага
    let seasson = input.shift().toUpperCase(); // Сезон

    let destination;
    let tripCost;
    let where;

    if (budget <= 100) {
        destination = "Bulgaria";

        if (seasson == "SUMMER") {
            tripCost = budget * 0.3;
            where = "Camp";
        } else {
            tripCost = budget * 0.7;
            where = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans";

        if (seasson == "SUMMER") {
            tripCost = budget * 0.4;
            where = "Camp";
        } else {
            tripCost = budget * 0.8;
            where = "Hotel";
        }
    } else {
        destination = "Europe";
        tripCost = budget * 0.9;
        where = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(where + " - " + tripCost.toFixed(2));
    console.log();
}

solve(["50", "summer"]);
solve(["75", "winter"]);
solve(["312", "summer"]);
solve(["678.53", "winter"]);
solve(["1500", "summer"]);
