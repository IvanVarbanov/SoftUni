function lettersToNumbers(string = "") {
    let dataArr = validateData(string);

    let result = 0;

    for (const data of dataArr) {
        let startWith = data[0];
        let endWith = data[data.length - 1];
        let number = Number(data.substring(1, data.length - 1));
        let tempResult = rightMath(endWith, leftMath(startWith, number));

        result += tempResult;

        // console.log(`${startWith} ${number} ${endWith}`);
        // console.log(tempResult);
    }

    console.log(result.toFixed(2));

    function rightMath(letter, number) {
        let letterVal = letter.toLowerCase().charCodeAt(0) - 96;

        if (letter === letter.toLowerCase()) {
            return number + letterVal;
        } else {
            return number - letterVal;
        }
    }

    function leftMath(letter, number) {
        let letterVal = letter.toLowerCase().charCodeAt(0) - 96;

        if (letter === letter.toLowerCase()) {
            return number * letterVal;
        } else {
            return number / letterVal;
        }
    }

    function validateData(dataForValidation) {
        let trimed;
        while (trimed !== dataForValidation) {
            trimed = dataForValidation;
            dataForValidation = dataForValidation.replace("  ", " ");
        }

        return trimed.split(" ");
    }
}

lettersToNumbers("A12b      s17G");
console.log();
lettersToNumbers("P34562Z q2576f   H456z");
console.log();
lettersToNumbers("a1A");
