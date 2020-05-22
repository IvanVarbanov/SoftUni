function solve(input) {
    let examH = +input.shift(); //Час на изпита
    let examMin = +input.shift(); // Минути на изпита

    let arrivalH = +input.shift(); //Час на пристигане
    let arrivalMin = +input.shift(); //Минути на пристигане

    let examStart = examH * 60 + examMin; //В колко часа почва изпита в минути

    let arrivalInMinutes = arrivalH * 60 + arrivalMin; //Време на пристигане в минути

    let razlika = arrivalInMinutes - examStart; //положително закъснял

    //console.log(razlika);

    let timeH;
    let timeMin;

    //Подранил - повече от 30 мин по-рано
    //Навреме - до 30 мин преди изпита
    //Закъснял - след часа на изпита

    if (razlika > 0) {
        //Закъснява
        console.log("Late");

        timeH = Math.floor(razlika / 60);
        timeMin = razlika % 60;

        if (timeMin <= 9) {
            timeMin = "0" + timeMin;
        }

        if (timeH >= 1) {
            console.log(`${timeH}:${timeMin} hours after the start`);
        } else {
            console.log(`${timeMin} minutes after the start`);
        }
    } else if (razlika >= -30 && razlika <= 0) {
        //навреме !!
        console.log("On time");
        razlika *= -1;
        timeMin = razlika % 60;

        if (timeMin != 0) {
            console.log(`${timeMin} minutes before the start`);
        }
    } else {
        //Подранява
        console.log("Early");
        razlika *= -1;

        timeH = Math.floor(razlika / 60);
        timeMin = razlika % 60;

        if (timeMin <= 9) {
            timeMin = "0" + timeMin;
        }

        if (timeH >= 1) {
            console.log(`${timeH}:${timeMin} hours before the start`);
        } else {
            console.log(`${timeMin} minutes before the start`);
        }
    }
}

console.log(1);
solve(["9", "30", "9", "50"]);
console.log(2);
solve(["9", "00", "8", "30"]);
console.log(3);
solve(["16", "00", "15", "00"]);

console.log(4);
solve(["9", "00", "10", "30"]);
console.log(5);
solve(["14", "00", "13", "55"]);
console.log(6);
solve(["11", "30", "8", "12"]);

console.log(7);
solve(["10", "00", "10", "00"]);
console.log(8);
solve(["11", "30", "10", "55"]);
console.log(9);
solve(["11", "30", "12", "29"]);
