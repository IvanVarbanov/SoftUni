function solve(arrayNum = [], magicNum) {
    for (let i = 0; i < arrayNum.length; i++) {
        let currentNum = arrayNum[i];
        let sumArray = [];

        for (let j = i + 1; j < arrayNum.length; j++) {
            if (currentNum + arrayNum[j] == magicNum) {
                sumArray.push(currentNum);
                sumArray.push(arrayNum[j]);
            }
        }

        if (sumArray.length > 0) {
            console.log(sumArray.join(" "));
        }
    }
}

solve([1, 7, 6, 2, 19, 23], 8);
console.log();
solve([14, 20, 60, 13, 7, 19, 8], 27);
console.log();
solve([1, 2, 3, 4, 5, 6], 6);
