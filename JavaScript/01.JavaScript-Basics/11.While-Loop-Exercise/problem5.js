function solve(input) {
    let change = +input.shift();

    let counter = 0;

    while (change >= 0.01) {
        if (change >= 2) {
            change -= 2;
            change.toFixed(2);
        } else if (change >= 1) {
            change -= 1;
            change.toFixed(2);
        } else if (change >= 0.5) {
            change -= 0.5;
            change.toFixed(2);
        } else if (change >= 0.2) {
            change -= 0.2;
            change.toFixed(2);
        } else if (change >= 0.1) {
            change -= 0.1;
            change.toFixed(2);
        } else if (change >= 0.05) {
            change -= 0.05;
            change.toFixed(2);
        } else if (change >= 0.02) {
            change -= 0.02;
            change.toFixed(2);
        } else {
            change = 0;
        }

        counter++;
    }

    console.log(counter);
}

solve([0.58]);
console.log();

// solve(["1.23"]);
// solve(["2"]);
// solve(["0.56"]);
// solve(["2.73"]);
