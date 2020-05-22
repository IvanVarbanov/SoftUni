function solve(input) {
    let budget = +input.shift();

    while (budget > 0) {
        let str = input.shift();

        if (str == "Stop") {
            console.log(`Money left: ${budget}`);
            return;
        }

        let strLength = str.length;

        let sum = 0;

        for (let i = 0; i < strLength; i++) {
            sum += str.charCodeAt(i);
        }

        if (budget > sum) {
            budget -= sum;
            console.log(`Item successfully purchased!`);
        } else {
            console.log(`Not enough money!`);
            return;
        }
    }
}

solve(["3000", "star", "Christmas tree", "tinsel", "Tree stand"]);
console.log();
solve(["5000", "Christmas lights", "wreath", "Stop"]);
