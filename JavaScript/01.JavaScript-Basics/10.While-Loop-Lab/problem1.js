function solve(input) {
    let number = +input.shift();

    while (number < 1 || number > 100) {
        console.log("Invalid Number!");
        number = +input.shift();
    }

    console.log(`The number is: ${number}`);
}

solve([-100, -150, 1000, 5]);
