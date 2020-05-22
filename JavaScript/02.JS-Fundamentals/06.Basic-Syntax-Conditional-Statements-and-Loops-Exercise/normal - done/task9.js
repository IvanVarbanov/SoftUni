function login(input) {
    let name = input.shift();

    let pass = "";
    let inputPass = input.shift();

    for (let i = name.length - 1; i >= 0; i--) {
        pass += name[i];
    }

    let result = `User ${name} blocked!`;

    for (let i = 0; i < 3; i++) {
        if (pass == inputPass) {
            console.log(`User ${name} logged in.`);
            return;
        } else {
            console.log("Incorrect password. Try again.");
        }
        inputPass = input.shift();
    }

    console.log(result);

    //oijoijoijio
}

login(["Acer", "login", "go", "let me in", "recA"]);
console.log();
login(["momo", "omom"]);
console.log();
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
