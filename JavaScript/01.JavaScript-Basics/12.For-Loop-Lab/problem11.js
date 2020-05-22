function solve(input) {
    let counter = +input.shift();

    for (i = 0; i <= counter; i += 2) {
        console.log(Math.pow(2, i));
    }
}

solve([3]);
console.log();
solve([4]);
console.log();
solve([5]);
console.log();
solve([6]);
console.log();
solve([7]);
