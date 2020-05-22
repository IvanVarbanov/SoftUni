function solve(input) {
    let numbers = +input.shift();

    let max = 0;
    let min = 0;

    for (let i = 0; i < numbers; i++) {
        let number = +input.shift();

        if (number > max || i == 0) {
            max = number;
        }

        if (number < min || i == 0) {
            min = number;
        }
    }

    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`);
}

solve(["3", "-10", "-20", "-30"]);
