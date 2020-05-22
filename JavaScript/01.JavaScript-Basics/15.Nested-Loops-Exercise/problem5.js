function solve(input) {
    let numJudge = +input.shift();
    let name = input.shift();

    let num = 0;
    let allAvSum = 0;

    while (name != "Finish") {
        let avSum = 0;
        num++;
        for (j = 1; j <= numJudge; j++) {
            let evaluation = +input.shift();
            avSum += evaluation;
            allAvSum += evaluation;
        }
        avSum = (avSum / numJudge).toFixed(2);
        console.log(`${name} - ${avSum}.`);

        name = input.shift();
    }

    allAvSum = (allAvSum / (num * numJudge)).toFixed(2);

    console.log(`Student's final assessment is ${allAvSum}.`);
}

solve(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
console.log();
solve(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
console.log();
solve(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);
