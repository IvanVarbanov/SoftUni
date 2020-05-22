function piccolo(input = []) {
    let cars = new Set();

    for (const car of input) {
        let [direction, number] = car.split(", ");

        if (direction == "IN") {
            cars.add(number);
        } else {
            cars.delete(number);
        }
    }

    let carsArr = Array.from(cars).sort((a, b) => a.localeCompare(b));

    console.log(carsArr.join("\n"));
}

piccolo([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
]);
