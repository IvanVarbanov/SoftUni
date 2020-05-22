function solve(input) {
    let counter = +input.shift();

    let OddSum = 0;
    let OddMin = "No";
    let OddMax = "No";
    let EvenSum = 0;
    let EvenMin = "No";
    let EvenMax = "No";

    for (i = 1; i <= counter; i++) {
        let number = +input.shift();

        if (i % 2 == 0) {
            EvenSum += number;
            if (EvenMax < number || i == 2) {
                EvenMax = number.toFixed(2);
            }

            if (EvenMin > number || i == 2) {
                EvenMin = number.toFixed(2);
            }
        } else {
            OddSum += number;
            if (OddMax < number || i == 1) {
                OddMax = number.toFixed(2);
            }

            if (OddMin > number || i == 1) {
                OddMin = number.toFixed(2);
            }
        }
    }

    console.log(`OddSum=${OddSum.toFixed(2)}`);
    console.log(`OddMin=${OddMin}`);
    console.log(`OddMax=${OddMax}`);
    console.log(`EvenSum=${EvenSum.toFixed(2)}`);
    console.log(`EvenMin=${EvenMin}`);
    console.log(`EvenMax=${EvenMax}`);
}

solve(["6", "2", "3", "5", "4", "2", "1"]);
console.log();
solve(["5", "3", "-2", "8", "11", "-3"]);
console.log();
solve(["1", "1"]);
console.log();
solve(["0"]);
