function solve(input) {
    let name = input.shift();
    let grade = +input.shift();
    let counter = 1;
    let totalGrade = 0;

    while (counter <= 12) {
        if (grade >= 4) {
            counter++;
            totalGrade += grade;
            grade = +input.shift();
        } else {
            grade = +input.shift();
        }
    }
    //console.log(counter);

    if (counter > 11) {
        totalGrade = (totalGrade / 12).toFixed(2);
        console.log(`${name} graduated. Average grade: ${totalGrade}`);
    }
}

solve(["Pesho", "4", "5.5", "6", "5.43", "4.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
console.log();
solve(["Ani", "5", "5.32", "6", "5.43", "5", "6", "5.5", "4.55", "5", "6", "5.56", "6"]);
