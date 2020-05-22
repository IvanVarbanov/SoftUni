function solve(input) {
    let counter = +input.shift();

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= counter; i++) {
        let number = +input.shift();

        if (number % 2 == 0) {
            p1 += 1;
        }

        if (number % 3 == 0) {
            p2 += 1;
        }

        if (number % 4 == 0) {
            p3 += 1;
        }
    }

    console.log(((p1 / counter) * 100).toFixed(2) + "%");
    console.log(((p2 / counter) * 100).toFixed(2) + "%");
    console.log(((p3 / counter) * 100).toFixed(2) + "%");
}

solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
console.log();
solve(["3", "3", "6", "9"]);
