function solve(input) {
    let etap = input.shift();
    let typeBilet = input.shift();
    let numBilets = +input.shift();
    let trophy = input.shift();

    let biletPrice = 0;
    let trophyPrice = 40;

    if (etap == "Quarter final") {
        switch (typeBilet) {
            case "Standard":
                biletPrice = 55.5;
                break;
            case "Premium":
                biletPrice = 105.2;
                break;
            case "VIP":
                biletPrice = 118.9;
                break;
        }
    } else if (etap == "Semi final") {
        switch (typeBilet) {
            case "Standard":
                biletPrice = 75.88;
                break;
            case "Premium":
                biletPrice = 125.22;
                break;
            case "VIP":
                biletPrice = 300.3;
                break;
        }
    } else {
        switch (typeBilet) {
            case "Standard":
                biletPrice = 110.1;
                break;
            case "Premium":
                biletPrice = 160.66;
                break;
            case "VIP":
                biletPrice = 400;
                break;
        }
    }

    let subTotal = numBilets * biletPrice;

    if (subTotal > 4000) {
        trophyPrice = 0;
        subTotal *= 0.75;
    } else if (subTotal > 2500) {
        subTotal *= 0.9;
    }

    if (trophy == "Y") {
        total = (subTotal + trophyPrice * numBilets).toFixed(2);
    } else {
        total = subTotal.toFixed(2);
    }

    console.log(total);
}

// solve(["Final", "Premium", "25", "Y"]);
// console.log();
solve(["Semi final", "VIP", "9", "Y"]);
// console.log();
// solve(["Quarter final", "Standard", "11", "N"]);
