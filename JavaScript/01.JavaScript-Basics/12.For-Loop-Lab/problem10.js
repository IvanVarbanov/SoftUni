function solve(input) {
    let counter = +input.shift();

    for (let i = 1; i <= counter; i += 3) {
        console.log(i);
    }
}

solve([15]);
