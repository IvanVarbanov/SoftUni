function solve(array = []) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let addNum = true;

        for (let j = 0; j < result.length; j++) {
            if (result[j] == num) {
                addNum = false;
                break;
            }
        }

        if (addNum) {
            result.push(num);
        }
    }

    console.log(result.join(" "));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log();
solve([1, 2, 3, 4]);
