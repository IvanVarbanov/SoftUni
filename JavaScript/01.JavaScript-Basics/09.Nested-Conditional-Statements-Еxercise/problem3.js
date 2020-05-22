function solve(input) {
    let degrees = Number(input.shift());
    let timeOfDay = input.shift().toUpperCase();

    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay == "MORNING") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (timeOfDay == "AFTERNOON") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else {
        if (timeOfDay == "MORNING") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (timeOfDay == "AFTERNOON") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

solve(["16", "Morning"]);
solve(["22", "Afternoon"]);
solve(["28", "Evening"]);
