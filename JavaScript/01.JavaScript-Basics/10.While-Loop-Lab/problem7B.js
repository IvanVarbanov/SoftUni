function solve(input) {
    let name = input.shift();
    let grade = +input.shift();
    let counter = 1;
    let excluded = 0;
    let totalGrade = 0;

    while (counter <= 12 && excluded == 0) {
        if (grade >= 4) {
            counter++;
            totalGrade += grade;
            grade = +input.shift();
        } else if (grade == 2) {
            excluded++;
            break;
        } else {
            grade = +input.shift();
        }
    }

    if (excluded > 0) {
        console.log(`${name} has been excluded at ${counter} grade`);
    } else {
        totalGrade = (totalGrade / 12).toFixed(2);
        console.log(`${name} graduated. Average grade: ${totalGrade}`);
    }
}

solve(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
console.log();
solve(["Mimi", "5", "6", "5", "6", "5", "6", "2", "6", "3"]);
