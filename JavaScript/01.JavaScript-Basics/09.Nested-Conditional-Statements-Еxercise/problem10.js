function solve(input) {
    let year = input.shift(); //Каква е годината
    let holidays = +input.shift(); //Празничнитци в годината
    let trip = +input.shift(); //Уйкенди в родния град.

    let total = 0;

    //48 уйкенда годишно

    // Само през уйкендите и почивните дни

    // !! 2/3 от празниците

    // !! Не е на работа 3/4 от уйкиндите, в който не е в софия

    // През високосните години играе 15% повече

    let weeksInSofiq = 48 - trip; //Уйкендите в София
    let weeksInRest = weeksInSofiq * 0.75; // Уйкенди в който играе в софия
    let holidaysWithSport = Math.floor(holidays * (3.0 / 4)); //Празниците в който играе

    if (year == "leap") {
        total = Math.floor(1.15 * (weeksInRest + holidaysWithSport + trip));
    } else {
        total = Math.floor(weeksInRest + holidaysWithSport + trip);
    }
    console.log(total);
}

solve(["leap", "5", "2"]);
console.log();
console.log(1);
solve(["normal", "3", "2"]);
console.log();
console.log(2);
solve(["leap", "2", "3"]);
console.log();
console.log(3);
solve(["normal", "11", "6"]);
console.log();
console.log(4);
solve(["leap", "0", "1"]);
console.log();
console.log(5);
solve(["normal", "6", "13"]);
