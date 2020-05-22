function solve(input) {
    let firstNumber = +input.shift();
    let secoundNumber = +input.shift();

    let result = "";

    for (let i = firstNumber; i <= secoundNumber; i++) {
        let sumEven = 0;
        let sumOdd = 0;

        for (j = 0; j < 6; j++) {
            let str = i.toString();

            let num = +str[j];

            if ((j + 1) % 2 == 0) {
                sumEven += num;
            } else {
                sumOdd += num;
            }
        }

        if (sumOdd == sumEven) {
            result += i + " ";
        }

        //console.log(sumEven);
    }

    console.log(result);
}

solve(["100000", "100050"]);
console.log();

// solve(["123456", "124000"]);
// console.log();

// solve(["299900", "300000"]);
// console.log();

// solve(["100115", "100120"]);
// console.log();
