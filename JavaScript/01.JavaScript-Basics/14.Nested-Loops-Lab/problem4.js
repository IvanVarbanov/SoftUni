function solve(input) {
    let number1 = +input.shift();
    let number2 = +input.shift();
    let magicalNumber = +input.shift();

    let counter = 0;

    for (let i = number1; i <= number2; i++) {
        for (let j = number1; j <= number2; j++) {
            let sum = i + j;
            counter++;
            if (sum == magicalNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicalNumber})`);
                return;
            }
        }
    }

    console.log(`${counter} combinations - neither equals ${magicalNumber}`);
}

solve(["1", "10", "5"]);

solve(["23", "24", "20"]);
