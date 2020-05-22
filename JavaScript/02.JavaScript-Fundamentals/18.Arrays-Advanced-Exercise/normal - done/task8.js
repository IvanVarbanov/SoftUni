function solve(numbers = [], commands = []) {
    let output = numbers.slice();

    for (let i = 0; i < commands.length; i++) {
        let currentCommands = commands[i].split(" ");
        let command = currentCommands[0];

        switch (command) {
            case "add":
                output.splice(currentCommands[1], 0, Number(currentCommands[2]));
                break;
            case "addMany":
                let manyNumbers = currentCommands.slice(2).map((x) => Number(x));
                let count = currentCommands[1];
                for (const numb of manyNumbers) {
                    output.splice(count++, 0, numb);
                }
                break;
            case "contains":
                console.log(output.indexOf(Number(currentCommands[1])));
                break;
            case "remove":
                output.splice(currentCommands[1], 1);
                break;
            case "shift":
                for (let i = 0; i < Number(currentCommands[1]); i++) {
                    let shifted = output.shift();
                    output.push(shifted);
                }
                break;
            case "sumPairs":
                let tempOutput = [];
                for (let i = 0; i < output.length - 1; i += 2) {
                    tempOutput.push(Number(output[i]) + Number(output[i + 1]));
                    if (i == output.length - 3) {
                        tempOutput.push(Number(output[output.length - 1]));
                    }
                }
                output = tempOutput.slice(0);
                break;
        }

        if (command == "print") {
            break;
        }

        // console.log(currentCommands);
    }

    console.log(`[ ${output.join(", ")} ]`);
}

solve([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains 3", "print"]);
console.log();
solve([1, 2, 3, 4, 5], ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);
console.log();
solve([1, 2, 4, 5, 6, 7], ["sumPairs", "print"]);
