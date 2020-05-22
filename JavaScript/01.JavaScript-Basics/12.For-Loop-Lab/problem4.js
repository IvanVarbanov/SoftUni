function solve(input) {
    let text = input.shift();

    let length = text.length;

    let sum = 0;

    for (let i = 0; i < length; i++) {
        let index = text[i];

        switch (index) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }

    console.log(sum);
}

solve(["hello"]);
solve(["hi"]);
solve(["bamboo"]);
solve(["beer"]);
