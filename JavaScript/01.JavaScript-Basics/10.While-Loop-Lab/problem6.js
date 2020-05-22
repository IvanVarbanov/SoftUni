function solve(input) {
    let numbers = +input.shift();
    let number = +input.shift();
    k = 0;

    let minValue = Number.MAX_SAFE_INTEGER;

    while (k < numbers) {
        k++;
        if (minValue > number) {
            minValue = number;
        }
        number = +input.shift();
    }

    console.log(minValue);
}

solve(["2", "100", "99"]);
console.log();
solve(["3", "-10", "20", "-30"]);
console.log();
solve(["4", "45", "-20", "7", "99"]);
console.log();
solve(["1", "999"]);
console.log();
solve(["2", "-1", "-2"]);
