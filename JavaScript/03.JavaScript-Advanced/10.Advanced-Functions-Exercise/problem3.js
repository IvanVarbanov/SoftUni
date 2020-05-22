function bmi(personName, age, weight, height) {
    let person = (function () {
        let name = personName;
        let personalInfo = {
            age,
            weight,
            height,
        };
        let bmi = 0;
        let status = 'non';

        (function () {
            let heightInM = height / 100;
            bmi = Math.round(weight / heightInM ** 2);
        })();

        (function () {
            if (bmi < 18.5) {
                status = 'underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                status = 'normal';
            } else if (bmi >= 25 && bmi < 30) {
                status = 'overweight';
            } else {
                status = 'obsese';
            }
        })();

        let result = {
            name,
            personalInfo,
            BMI: bmi,
            status,
        };

        (function () {
            console.log(result);
        })();
    })();
}

bmi('Peter', 29, 75, 182);
bmi('Honey Boo Boo', 9, 57, 137);
