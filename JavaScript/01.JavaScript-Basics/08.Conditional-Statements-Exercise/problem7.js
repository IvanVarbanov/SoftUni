function solve(input) {
    let record = Number(input.shift()); //Рекорда в секунди
    let distance = Number(input.shift()); //Дистанцията в метри
    let time = Number(input.shift()); //Времето в секунди за 1м

    let zabavqne = parseInt(distance / 15) * 12.5;

    let ivansTime = zabavqne + distance * time;

    if (ivansTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivansTime - record).toFixed(2)} seconds slower.`);
    }
}

solve(["10464", "1500", "20"]);
solve(["55555.67", "3017", "5.03"]);
