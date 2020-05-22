function solve(input) {
    let singer = +input.shift();
    let guestGroup = input.shift();

    let totalMoney = 0;
    let sumGuests = 0;

    while (guestGroup != "The restaurant is full") {
        guestGroup = Number(guestGroup);
        if (guestGroup >= 5) {
            totalMoney += guestGroup * 70;
        } else {
            totalMoney += guestGroup * 100;
        }

        sumGuests += guestGroup;

        guestGroup = input.shift();
    }

    if (totalMoney >= singer) {
        console.log(`You have ${sumGuests} guests and ${totalMoney - singer} leva left.`);
    } else {
        console.log(`You have ${sumGuests} guests and ${totalMoney} leva income, but no singer.`);
    }
}

solve(["2800", "5", "5", "4", "6", "6", "12", "12", "The restaurant is full"]);
console.log();
solve(["3200", "5", "12", "6", "6", "12", "The restaurant is full"]);
console.log();
solve(["1800", "4", "4", "4", "4", "6", "6", "The restaurant is full"]);
