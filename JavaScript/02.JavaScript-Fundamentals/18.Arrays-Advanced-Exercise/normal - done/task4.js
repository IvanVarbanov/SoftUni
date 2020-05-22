function solve(array = []) {
    let ascending = array.slice().sort((a, b) => a - b);
    let descending = array.slice().sort((a, b) => b - a);

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if ((i + 1) % 2 == 0) {
            let temp = ascending.shift();
            result.push(temp);
        } else {
            let temp = descending.shift();
            result.push(temp);
        }
    }

    console.log(result.join(" "));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
