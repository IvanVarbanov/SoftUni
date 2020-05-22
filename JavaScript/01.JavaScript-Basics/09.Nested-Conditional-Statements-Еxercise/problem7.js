function solve(input) {
    let n1 = +input.shift();
    let n2 = +input.shift();
    let operation = input.shift();

    let result;
    let evenOdd = "even";

    switch (operation) {
        case "+":
            result = n1 + n2;

            if (result != 0 && result % 2 != 0) {
                evenOdd = "Odd";
            }
            break;
        case "-":
            result = n1 - n2;

            if (result != 0 && result % 2 != 0) {
                evenOdd = "Odd";
            }
            break;
        case "*":
            result = n1 * n2;

            if (result != 0 && result % 2 != 0) {
                evenOdd = "Odd";
            }
            break;
        case "/":
            if (n1 != 0 && n2 != 0) {
                result = n1 / n2;
            }

            break;
        case "%":
            if (n1 != 0 && n2 != 0) {
                result = n1 % n2;
            }
            break;
    }

    if ((operation == "/" || operation == "%") && (n1 == 0 || n2 == 0)) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operation == "/" || operation == "%") {
        console.log(`${n1} / ${n2} = ${result}`);
    } else {
        console.log(`${n1} ${operation} ${n2} = ${result} – ${evenOdd}`);
    }
}

solve(["10", "12", "+"]);
solve(["10", "1", "-"]);
solve(["7", "3", "*"]);
solve(["123", "12", "/"]);
solve(["10", "3", "%"]);
solve(["112", "0", "/"]);
solve(["10", "0", "%"]);
