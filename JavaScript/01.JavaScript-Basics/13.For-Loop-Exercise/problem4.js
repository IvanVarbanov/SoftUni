function solve(input) {
    let counter = +input.shift();

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= counter; i++) {
        let number = +input.shift();

        if (number < 200) {
            p1 += 1;
        } else if (number >= 200 && number <= 399) {
            p2 += 1;
        } else if (number >= 400 && number <= 599) {
            p3 += 1;
        } else if (number >= 600 && number <= 799) {
            p4 += 1;
        } else if (number >= 800) {
            p5 += 1;
        }
    }

    console.log(((p1 / counter) * 100).toFixed(2) + "%");
    console.log(((p2 / counter) * 100).toFixed(2) + "%");
    console.log(((p3 / counter) * 100).toFixed(2) + "%");
    console.log(((p4 / counter) * 100).toFixed(2) + "%");
    console.log(((p5 / counter) * 100).toFixed(2) + "%");
}

// solve(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);
solve(["7", "800", "801", "250", "199", "399", "599", "799"]);

// 14.29%
// 28.57% !!
// 14.29% !!
// 14.29% !!
// 28.57%
