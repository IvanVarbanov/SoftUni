function solve(array = []) {
    let newArray = [];

    for (num of array) {
        if (num < 0) {
            newArray.unshift(num);
        } else {
            newArray.push(num);
        }
    }

    console.log(newArray.join("\n"));
}

solve([7, -2, 8, 9]);
