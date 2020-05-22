function solve(input) {
    let type = input.shift().toUpperCase();
    let x = Number(input.shift());
    let y = Number(input.shift());
    let cost = 7.5;

    let billets = x * y;

    if (type == "PREMIERE") {
        cost = 12;
    } else if (type == "DISCOUNT") {
        cost = 5;
    }

    console.log((billets * cost).toFixed(2) + " leva");
}

solve(["Premiere", "10", "12"]);
solve(["Normal", "21", "13"]);
solve(["Discount", "12", "30"]);
