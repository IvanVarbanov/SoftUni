function solve(input) {
    let floors = +input.shift();
    let rooms = +input.shift();

    let row = "";

    for (i = floors; i >= 1; i--) {
        row = "";
        for (j = 0; j < rooms; j++) {
            let type;

            if (i % 2 === 0) {
                type = "O";
            } else {
                type = "A";
            }

            if (i === floors) {
                type = "L";
            }

            row += `${type}${i}${j} `;
        }
        console.log(row);
    }
}

solve(["6", "4"]);
console.log();
solve(["9", "5"]);
console.log();
solve(["4", "4"]);
