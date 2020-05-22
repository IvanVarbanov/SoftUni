function solve(input) {
    let n = +input.shift();

    let k = 1;

    while (k <= n) {
        k = k * 2 + 1;
    }
    console.log(k);
}

solve([3]);
solve([8]);
solve([17]);
solve([31]);
