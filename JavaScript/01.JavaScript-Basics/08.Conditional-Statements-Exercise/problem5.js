function solve(input) {
    let hours = Number(input.shift());
    let minutes = Number(input.shift()) + 15;
    let ostatyk = 0;

    if (minutes > 59) {
        ostatyk = minutes % 60;
        hours += 1;
    } else {
        ostatyk = minutes;
    }

    if (ostatyk <= 9) {
        ostatyk = "0" + ostatyk;
    }

    if (hours > 23) {
        hours = 0;
    }

    console.log(hours + ":" + ostatyk);
}

solve(["1", "46"]);
solve(["0", "01"]);
solve(["23", "59"]);
solve(["11", "08"]);
solve(["12", "49"]);
