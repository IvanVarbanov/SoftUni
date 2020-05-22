function addSubtract(a, b, c) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    return subtract(sum(a, b), c);
}

let result = addSubtract(23, 6, 10);
console.log(result);
