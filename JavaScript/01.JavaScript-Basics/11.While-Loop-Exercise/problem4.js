function solve(input) {
    let steps = input.shift();

    let sumSteps = 0;

    if (steps == "Going home") {
        steps = +input.shift();
        sumSteps += steps;
    } else {
        steps = Number(steps);

        while (sumSteps < 10000) {
            sumSteps += steps;

            steps = input.shift();

            if (steps == "Going home") {
                steps = +input.shift();
                sumSteps += steps;
                break;
            } else {
                steps = Number(steps);
            }
        }
    }

    //console.log(sumSteps);

    if (sumSteps < 10000) {
        console.log(`${10000 - sumSteps} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
    }
}

solve(["1000", "1500", "2000", "6500"]);
console.log();
solve(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
console.log();
solve(["1500", "300", "2500", "3000", "Going home", "200"]);
console.log();
solve(["125", "250", "4000", "30", "2678", "4682"]);
