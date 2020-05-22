function solve(input) {
    let username = input.shift();
    let pass = input.shift();

    let inputPass = input.shift();

    while (pass !== inputPass) {
        inputPass = input.shift();
    }

    console.log(`Welcome ${username}!`);
}

solve(["Nakov", "1234", "pass", "1324", "1234"]);
