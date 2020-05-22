function solve(array = []) {
    let numbers = [];

    for (let i = 0; i < array.length; i++) {
        let currentArray = [];
        currentArray.push(array[i]);

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                currentArray.push(array[j]);
            } else {
                break;
            }
        }

        if (currentArray.length > numbers.length) {
            numbers = currentArray.slice();
        }
    }
    console.log(numbers.join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([4, 4, 4, 4]);
