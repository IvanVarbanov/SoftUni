function solve(input) {
    let number = +input.shift();
    let numbers = 0;

    for (let i = 1; i <= number; i++) {
        let counter = i;
        let result = "";

        for (let j = 1; j <= counter; j++) {
            numbers++;

            if (numbers > number) {
                break;
            }

            result += `${numbers} `;
        }

        console.log(result);

        if (numbers > number) {
            return;
        }
    }
}

solve(["7"]);
console.log();
solve(["10"]);
console.log();
solve(["12"]);
console.log();
solve(["15"]);
console.log();
