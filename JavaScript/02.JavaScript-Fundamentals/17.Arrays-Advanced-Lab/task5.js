function processOddNumbers(array = []) {
    let result = [];
    for (const index in array) {
        if (index % 2 != 0) {
            result.unshift(array[index] * 2);
        }
    }

    console.log(result.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
console.log();
processOddNumbers([3, 0, 10, 4, 7, 3]);
