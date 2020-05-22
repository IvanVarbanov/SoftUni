function solve(input) {
    let width = +input.shift();
    let length = +input.shift();

    let cake = width * length;

    let piece = input.shift();

    let sum = 0;

    while (piece != "STOP" && sum < cake) {
        piece = Number(piece);
        sum += piece;
        piece = input.shift();
    }

    if (cake >= sum) {
        console.log(`${cake - sum} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${sum - cake} pieces more.`);
    }
}

solve(["10", "10", "20", "20", "20", "20", "21"]);
console.log();
solve(["10", "2", "2", "4", "6", "STOP"]);
