function solve(input) {
    let numLength = +input.shift();

    let sum = 0;

    for (let i = 0; i < numLength; i++) {
        let number = +input.shift();

        sum += number;
    }

    console.log(sum);
}

solve(["2", "10", "20"]);
solve(["4", "45", "-20", "7", "11"]);
