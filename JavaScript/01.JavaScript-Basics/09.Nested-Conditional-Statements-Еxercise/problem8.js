function solve(input) {
    let month = input.shift();
    let nights = +input.shift();

    let studio = 0;
    let apartment = 0;

    switch (month) {
        case "May":
        case "October":
            studio = 50;
            apartment = 65;
            break;
        case "June":
        case "September":
            studio = 75.2;
            apartment = 68.7;
            break;
        case "July":
        case "August":
            studio = 76;
            apartment = 77;
            break;
    }
    if (month == "May" || month == "October") {
        if (nights <= 7) {
            studio *= 0.95;
        } else if (nights >= 14) {
            studio *= 0.7;
        }
    } else if ((month == "June" || month == "September") && nights > 14) {
        studio *= 0.8;
    }

    if (nights > 14) {
        apartment *= 0.9;
    }

    console.log(`Apartment: ${(nights * apartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studio).toFixed(2)} lv.`);
    console.log();
}

solve(["May", "15"]);
solve(["June", "14"]);
solve(["August", "20"]);
