function solve(input) {
    let score = Number(input.shift());

    let bonus = 0.0;

    if (score <= 100) {
        bonus += 5;
    } else if (score > 1000) {
        bonus = score * 0.1;
    } else {
        bonus = score * 0.2;
    }

    if (score % 2 === 0) {
        bonus += 1;
    } else if (score % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(score + bonus);
    console.log();
}

solve(["20"]);
solve(["175"]);
solve(["2703"]);
solve(["15875"]);
