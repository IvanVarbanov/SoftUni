function solve(input) {
    let name = input.shift();

    let winner = "";
    let max = 0;

    if (name == "STOP") {
        return;
    }

    while (name != "STOP") {
        let nameLength = name.length;

        let sum = 0;

        for (i = 0; i < nameLength; i++) {
            let number = name.charCodeAt(i);

            sum += number;
        }

        if (sum > max) {
            winner = name;
            max = sum;
        }

        name = input.shift();
    }

    console.log(`Winner is ${winner} - ${max}!`);
}

solve(["Petar", "Georgi", "Stanimir", "STOP"]);
console.log();
solve(["Ivo", "Niki", "Valio", "Konstantin", "STOP"]);
