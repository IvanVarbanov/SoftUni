function solve(input) {
    let needMoney = +input.shift(); //Нужните пари за екскурзията
    let moneyYouHave = +input.shift(); //Парите с който разполагаме

    let spendCounter = 0;
    //let sumSave = 0;
    let dayCounter = 0;

    while (moneyYouHave < needMoney && spendCounter < 5) {
        let type = input.shift();
        let money = +input.shift();

        if (type == "save") {
            moneyYouHave += money;
            spendCounter = 0;
        } else {
            moneyYouHave -= money;
            spendCounter++;
        }

        if (moneyYouHave < 0) {
            moneyYouHave = 0;
        }

        dayCounter++;
    }

    if (spendCounter == 5) {
        console.log(`You can't save the money.`);
        console.log(`${dayCounter}`);
    } else {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}

solve(["2000", "1000", "spend", "1200", "save", "2000"]);
console.log();
solve(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
console.log();
solve(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
