function solve(input) {
    let maxBadGrade = +input.shift();
    let taskName = input.shift();

    let badGrades = 0;
    let totalGrade = 0;
    let taskCounter = 0;
    let lastProblem = "";

    while (taskName != "Enough" && badGrades < maxBadGrade) {
        taskCounter++;

        let grade = +input.shift();

        totalGrade += grade;

        lastProblem = taskName;

        if (grade <= 4) {
            badGrades++;
        }

        if (badGrades < maxBadGrade) {
            taskName = input.shift();
        }
    }

    if (badGrades == maxBadGrade) {
        console.log(`You need a break, ${maxBadGrade} poor grades.`);
    } else {
        console.log(`Average score: ${(totalGrade / taskCounter).toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

solve(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
console.log();
solve(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
