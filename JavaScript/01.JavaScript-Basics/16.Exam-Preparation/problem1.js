function solve(input) {
    let priceBaklava = +input.shift();
    let priceMufin = +input.shift();

    let weightShtolem = +input.shift();
    let weightBombons = +input.shift();
    let weightBiscviti = +input.shift();

    let priceShtolem = priceBaklava * 1.6;
    let priceBombons = priceMufin * 1.8;
    let priceBiscviti = 7.5;

    let totalShtolem = weightShtolem * priceShtolem;
    let totalBimbons = weightBombons * priceBombons;
    let totalBiscviti = weightBiscviti * priceBiscviti;

    let total = totalBimbons + totalBiscviti + totalShtolem;

    console.log(total.toFixed(2));
}

solve(["6.90", "4.20", "1.5", "2.5", "1"]);
console.log();
solve(["5.55", "3.57", "4.3", "3.6", "7"]);
console.log();
solve(["7.79", "5.35", "9.3", "0", "0"]);
