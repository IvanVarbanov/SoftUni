function solve(input) {
    let number = Number(input.shift());
    let unit = input.shift();
    let unitToConvert = input.shift();

    //Пробразуваме разстояните в мм
    if (unit == "m") {
        number *= 1000;
    } else if (unit == "cm") {
        number *= 10;
    }

    if (unitToConvert == "m") {
        console.log((number / 1000).toFixed(3));
    } else if (unitToConvert == "cm") {
        console.log((number / 100).toFixed(3));
    } else {
        console.log(number.toFixed(3));
    }
}
solve(["12", "mm", "m"]);
solve(["150", "m", "cm"]);
solve(["45", "cm", "mm"]);
