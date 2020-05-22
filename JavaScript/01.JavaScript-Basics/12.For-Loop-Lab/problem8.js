function solve(input) {
    let counter = +input.shift();

    let sumEven = 0;
    let sumOdd = 0;

    for (i = 0; i < counter; i++) {
        let number = +input.shift();

        if (i % 2 == 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }

    if (sumOdd == sumEven) {
        console.log(`Yes`);
        console.log(`Sum = ${sumEven}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(sumOdd - sumEven)}`);
    }
}

solve(["4", "10", "50", "60", "20"]);
solve(["4", "3", "5", "1", "-2"]);
solve(["3", "5", "8", "1"]);
