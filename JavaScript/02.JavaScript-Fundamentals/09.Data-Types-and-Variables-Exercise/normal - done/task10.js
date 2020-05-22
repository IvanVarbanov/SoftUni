function spice(yield) {
    let sum = 0;
    let days = 0;
    for (let i = yield; i >= 100; i -= 10) {
        sum += i - 26;
        days++;
    }

    console.log(days);

    sum <= 26 ? console.log("0") : console.log(sum - 26);
}

spice(111);
