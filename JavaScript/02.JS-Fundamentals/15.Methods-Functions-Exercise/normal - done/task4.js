function addEvenSum(input) {
    let digits = input.toString().split("");

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < digits.length; i++) {
        if (Number(digits[i]) % 2 == 0) {
            sumEven += Number(digits[i]);
        } else {
            sumOdd += Number(digits[i]);
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

let result = addEvenSum(3495892137259234);

console.log(result);
