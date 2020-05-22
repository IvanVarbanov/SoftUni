function calculator(num1, num2, opertion) {
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;
    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;

    switch (opertion) {
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
    }
}

let result = calculator(5, 5, "multiply");

console.log(result);
