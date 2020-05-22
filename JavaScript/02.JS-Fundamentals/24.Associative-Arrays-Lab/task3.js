function grades(input = []) {
    let schoolGrades = new Map();

    for (const string of input) {
        let studentGrades = string.split(" ");
        let studentName = studentGrades.shift();
        //console.log(studentGrades);

        if (!schoolGrades.has(studentName)) {
            schoolGrades.set(studentName, studentGrades);
        } else {
            schoolGrades.set(studentName, schoolGrades.get(studentName).concat(studentGrades));
        }
    }

    let sortedSchoolGrades = Array.from(schoolGrades).sort((a, b) => average(a, b));

    function average(a, b) {
        let aSum = a[1].reduce((a, b) => (a += Number(b)), 0);
        let bSum = b[1].reduce((a, b) => (a += Number(b)), 0);

        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;

        return aAverage - bAverage;
    }

    for (const student of sortedSchoolGrades) {
        console.log(`${student[0]}: ${student[1].join(", ")}`);
    }
}

grades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
