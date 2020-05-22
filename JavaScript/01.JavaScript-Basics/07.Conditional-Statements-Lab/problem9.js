function solve(input) {
    let tripCost = Number(input.shift());
    let puzzleCount = Number(input.shift());
    let dollsCount = Number(input.shift());
    let bearCount = Number(input.shift());
    let minionCount = Number(input.shift());
    let truckCount = Number(input.shift());

    //Общо поръчани играчки
    let countTotal =
        puzzleCount + dollsCount + bearCount + minionCount + truckCount;

    //Оборот от поръчаните играчки
    let subTotal =
        puzzleCount * 2.6 +
        dollsCount * 3 +
        bearCount * 4.1 +
        minionCount * 8.2 +
        truckCount * 2;

    //Дали да добавя отстъпка
    if (countTotal >= 50) {
        subTotal = subTotal * 0.75;
    }

    //Крайна сума след отстъпката ако има такава и минус 10% за наем
    let grandTotal = subTotal * 0.9;

    if (grandTotal >= tripCost) {
        let moneyLeft = grandTotal - tripCost;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyLeft1 = tripCost - grandTotal;
        console.log(`Not enough money! ${moneyLeft1.toFixed(2)} lv needed.`);
    }
}

solve(["40.8", "20", "25", "30", "50", "10"]);

solve(["320", "8", "2", "5", "5", "1"]);
