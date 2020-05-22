function neighborhoods(input = []) {
    let output = new Map();
    let neighborhoods = input.shift().split(", ");

    for (const neighborhood of neighborhoods) {
        output.set(neighborhood, []);
    }

    for (const people of input) {
        let [neighborhood, name] = people.split(" - ");

        if (output.has(neighborhood)) {
            output.set(neighborhood, output.get(neighborhood).concat(name));
        }
    }

    let result = Array.from(output).sort((a, b) => b[1].length - a[1].length);

    for (const neighborhood of result) {
        console.log(`${neighborhood[0]}: ${neighborhood[1].length}`);
        for (const people of neighborhood[1]) {
            console.log(`--${people}`);
        }
    }
}

neighborhoods([
    "Abbey Street, Herald Street, Bright Mews",
    "Bright Mews - Garry",
    "Bright Mews - Andrea",
    "Invalid Street - Tommy",
    "Abbey Street - Billy",
]);
