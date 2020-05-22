function solve(input) {
    let length = +input.shift();

    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 1; i < length; i++) {
        let numberL1 = +input.shift();
        let numberL2 = +input.shift();

        sumLeft = numberL1 + numberL2;

        let numberR1 = +input.shift();
        let numberR2 = +input.shift();

        sumRight = numberR1 + numberR2;
    }

    if (sumRight == sumLeft) {
        console.log(`Yes, sum = ${sumLeft}`);
    } else {
        console.log(`No, diff = ${Math.abs(sumLeft - sumRight)}`);
    }
}

solve(["4", "10", "90", "60", "40", "70", "30", "50", "50"]);

// solve(["2", "10", "90", "60", "40"]);
// solve(["2", "90", "9", "50", "50"]);
