function solve(input) {
    let income = Number(input.shift()); //Доход
    let grade = Number(input.shift()); //Средна оценка
    let salary = Number(input.shift()); //Минимална заплата

    let socStependiq = salary * 0.35; //Социална степендия

    let stependiq = grade * 25; //Степендия за отличен успех

    if (grade >= 5.5) {
        if (income < salary && socStependiq > stependiq) {
            console.log(`You get a Social scholarship ${socStependiq} BGN`);
        } else {
            console.log(`You get a scholarship for excellent results ${stependiq} BGN`);
        }
    } else if (income < salary) {
        if (grade >= 5.5 && stependiq > socStependiq) {
            console.log(`You get a scholarship for excellent results ${stependiq} BGN`);
        } else {
            console.log(`You get a Social scholarship ${socStependiq} BGN`);
        }
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}

solve(["480.00", "4.60", "450.00"]);
solve(["300.00", "5,65", "420.00"]);
