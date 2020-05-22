function solve(input) {
    let inputNumber = +input.shift();

    let result = "";

    for (let i = 1111; i <= 9999; i++) {
        let str = i.toString();
        let counter = 0;

        for (let j = 0; j < 4; j++) {
            let posNumber = Number(str[j]);

            if (inputNumber % posNumber == 0) {
                counter++;
            }
        }

        if (counter == 4) {
            result += `${i} `;
        }
    }

    console.log(result);
}

solve([3]);
// console.log();
// solve([11]);
// console.log();
// solve([16]);
