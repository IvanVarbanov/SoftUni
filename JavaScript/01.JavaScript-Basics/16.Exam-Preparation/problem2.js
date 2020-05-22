function solve(input) {
    let needMoney = +input.shift();
    let fantasyBooks = +input.shift();
    let horrorBooks = +input.shift();
    let romanseBooks = +input.shift();

    let bonus = 0;

    let total = (fantasyBooks * 14.9 + horrorBooks * 9.8 + romanseBooks * 4.3) * 0.8;

    if (total >= needMoney) {
        bonus = Math.floor((total - needMoney) * 0.1);
        total = total - bonus;
        console.log(`${total.toFixed(2)} leva donated.`);
        console.log(`Sellers will receive ${bonus} leva.`);
    } else {
        console.log(`${(needMoney - total).toFixed(2)} money needed.`);
    }
}

solve(["200", "15", "10", "5"]);
console.log();
solve(["168", "5", "3", "8"]);
