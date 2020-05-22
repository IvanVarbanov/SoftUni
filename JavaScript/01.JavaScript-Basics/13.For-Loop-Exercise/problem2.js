function solve(input) {
    let counter = +input.shift();

    let max = 0;

    let sum = 0;

    for (i = 0; i < counter; i++) {
        let number = +input.shift();

        sum += number;

        if (max < number || i == 0) {
            max = number;
        }
    }

    if (sum / 2 == max) {
        console.log("Yes");
        console.log(`Sum = ${max}`);
    } else {
        console.log("No");
        console.log(`Diff = ${Math.abs(sum - max * 2)}`);
    }
}

solve(["7", "3", "4", "1", "1", "2", "12", "1"]);
console.log();
solve(["3", "1", "1", "10"]);
