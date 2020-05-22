function solve(input) {
    let destination = input.shift();

    while (destination != "End") {
        let budget = input.shift();

        let neededMoney = 0;

        while (neededMoney < budget) {
            let money = +input.shift();
            neededMoney += money;
        }
        console.log(`Going to ${destination}!`);

        destination = input.shift();
    }
}

solve(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
console.log();
solve([
    "France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"
]);
