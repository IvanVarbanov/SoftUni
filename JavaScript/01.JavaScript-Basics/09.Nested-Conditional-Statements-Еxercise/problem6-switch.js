function solve(input) {
    let budget = +input.shift();
    let seasson = input.shift();

    let destination;
    let where;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (seasson) {
            case "summer":
                budget *= 0.3;
                where = "Camp";
                break;
            case "winter":
                budget *= 0.7;
                where = "Hotel";
                break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (seasson) {
            case "summer":
                budget *= 0.4;
                where = "Camp";
                break;
            case "winter":
                budget *= 0.8;
                where = "Hotel";
                break;
        }
    } else {
        destination = "Europe";
        where = "Hotel";
        budget *= 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(where + " - " + budget.toFixed(2));
    console.log();
}

solve(["50", "summer"]);
solve(["75", "winter"]);
solve(["312", "summer"]);
solve(["678.53", "winter"]);
solve(["1500", "summer"]);
